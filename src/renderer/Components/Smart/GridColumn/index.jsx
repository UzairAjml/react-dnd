import { isDate } from 'moment';
import React, {useState , useRef ,useCallback} from 'react'
import { useDrop , useDrag} from 'react-dnd';
import { itemTypes  } from 'renderer/utils/DndTypes';
import ImageCard from 'renderer/Components/Presentational/ImageCard/ImageCard';
import update from 'immutability-helper';
const GridColumn = () => {
    const ref = useRef(null);
    const [equipments,setEquipments] = useState([]);
    const [{isOver}, drop] = useDrop({
        accept : itemTypes.CARD,
        drop : (item,monitor) => moveOver(item),
        collect : monitor => ({
            isOver : !!monitor.isOver(),
        })
    })

    // const [{isDragging} ,drag] = useDrag({
    //     type : itemTypes.CARD,
    //     item : {
    //         title : title,
    //         imgsrc : imgsrc
    //     },
    //     collect : monitor => ({
    //         isDragging : !!monitor.isDragging(),
    //     }),
    // })

    const moveOver = (item) => {
        if(equipments.length === 0) {
            item.id = 1;
        }
        else {
            item.id = equipments[equipments.length-1]?.id + 1;
        }
        setEquipments((prevState)=>{
            return [...prevState,item];
        })
    }
    const deleteEquipment = (id) => {
        const tempEquipments = equipments.filter((el)=>el.id !== id);
        setEquipments([...tempEquipments]);
    }

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = equipments[dragIndex];
        setEquipments(update(equipments, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [equipments]);

    console.log(equipments , "Equipments Here")
    drop(ref);
    return (
        <div ref={ref} style={ isOver ? {backgroundColor:"red", display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px" , alignItems:"center"} : { display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px" , alignItems:"center"}}>
              { equipments && equipments.length ?
              equipments.map((el,i)=><ImageCard  id={el.id} imgsrc={el.imgsrc} index={i} moveCard={moveCard} deleteEquipment={deleteEquipment}/>)
              : ""
            }
        </div>
    )
}

export default GridColumn
