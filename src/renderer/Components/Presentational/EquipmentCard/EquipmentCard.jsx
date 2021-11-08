import React from 'react'
import './EquipmentCard.scss';
import { useDrag } from 'react-dnd';
import { itemTypes } from 'renderer/utils/DndTypes';
const EquipmentCard = ({title,imgsrc}) => {
    const [{isDragging} ,drag] = useDrag({
        type : itemTypes.CARD,
        item : {
            title : title,
            imgsrc : imgsrc
        },
        collect : monitor => ({
            isDragging : !!monitor.isDragging(),
        }),
    })
    console.log(isDragging);
    return (
        <div onClick={()=>console.log(title)} className="EquipmentCard">
            <img ref={drag} width={60} height = {60} style={isDragging ? {opacity:"0.5"} : {opacity:"1"}} src={imgsrc}></img>
            <p className="description">{title}</p>
        </div>
    )
}

export default EquipmentCard
