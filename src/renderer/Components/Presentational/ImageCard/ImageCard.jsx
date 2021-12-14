import React,{useRef} from 'react'
import { useDrag,useDrop } from 'react-dnd'
import { itemTypes  } from 'renderer/utils/DndTypes';
import { useSelector } from 'react-redux';
import "./ImageCard.scss";
import RemoveICON from '../../../../../assets/icons/remove.png';

const ImageCard = ({id , imgsrc,index,moveCard ,deleteEquipment}) => {
    const isDeletable = useSelector((state)=>state.panel.isDelete)
    console.log(isDeletable , "isDeletable");
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: "IMAGECARD",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: "IMAGECARD",
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));
    return (
        <div className="ImageCard" style={{position:"relative"}}>
        <img ref={ref} style={isDragging ? {opacity:0.5 , minWidth:"40px"} : {opacity:1 , minWidth:"40px"}} width={40} height={40} src={imgsrc} onClick={()=>console.log(id , "id Here")}/>
         {isDeletable ?
         <img src={RemoveICON} className="deleteIcon" onClick={()=>deleteEquipment(id)}/>
         : ''
        } 
        </div>
    )
}

export default ImageCard
