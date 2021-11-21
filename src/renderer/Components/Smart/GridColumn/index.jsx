import { isDate } from 'moment';
import React, {useState , useRef ,useCallback} from 'react'
import { useDrop , useDrag} from 'react-dnd';
import { itemTypes  } from 'renderer/utils/DndTypes';
import ImageCard from 'renderer/Components/Presentational/ImageCard/ImageCard';
import update from 'immutability-helper';
import Column from 'antd/lib/table/Column';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GridColumn.scss";
const GridColumn = ({ColumnID}) => {
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
     const notifyError =() =>{
        return toast.error("Panel Width is not enough" ,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            })
     }
    const moveOver = (item) => {


        if(equipments.length === 0) {
            item.id = 1;
        }
        else {
            item.id = equipments[equipments.length-1]?.id + 1;
        }
        var children = document.getElementById(`${ColumnID}`).children;
        var totalWidth = 0;
       for (var i = 0; i < children.length; i++) {
        totalWidth += children[i].offsetWidth;
       }
       if(document.getElementById(`${ColumnID}`).offsetWidth - totalWidth > 40 ) {
        setEquipments((prevState)=>{
            return [...prevState,item];
        })
    }
    else {
        notifyError();
    }
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
        <>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            limit={1}
            />
        <div id={ColumnID} ref={ref} style={ isOver ? {backgroundColor:"red", display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px" , alignItems:"center"} : { display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px" , alignItems:"center"}}>
              { equipments && equipments.length ?
              equipments.map((el,i)=><ImageCard  id={el.id} imgsrc={el.imgsrc} index={i} moveCard={moveCard} deleteEquipment={deleteEquipment}/>)
              : ""
            }
        </div>
        </>
    )
}

export default GridColumn
