import React from 'react'
import './EquipmentCard.scss'
const EquipmentCard = ({title,imgsrc}) => {
    return (
        <div onClick={()=>console.log(title)} className="EquipmentCard">
            <img width={60} height = {60} src={imgsrc}></img>
            <p className="description">{title}</p>
        </div>
    )
}

export default EquipmentCard
