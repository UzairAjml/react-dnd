import { isDate } from 'moment';
import React, {useState , useRef} from 'react'
import { useDrop , useDrag} from 'react-dnd';
import { itemTypes  } from 'renderer/utils/DndTypes';
import ImageCard from 'renderer/Components/Presentational/ImageCard/ImageCard';
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

    console.log(equipments , "Equipments Here")
    drop(ref);
    return (
        <div ref={ref} style={{display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px"}}>
              { equipments && equipments.length ?
              equipments.map((el)=><ImageCard  id={el.id} imgsrc={el.imgsrc}/>)
              : ""
            }
        </div>
    )
}

export default GridColumn
