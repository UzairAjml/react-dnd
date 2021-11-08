import React, {useState}from 'react'
import './GridBox.scss';
import { itemTypes } from 'renderer/utils/DndTypes';
import { useDrag, useDrop } from 'react-dnd';
const PanelBox = () => {
    const [equipments,setEquipments] = useState([]);
    const [{isOver}, drop] = useDrop({
        accept : itemTypes.CARD,
        drop : (item,monitor) => moveOver(item),
        collect : monitor => ({
            isOver : !!monitor.isOver(),
        })
    })
    const moveOver = (item) => {
        setEquipments((prevState)=>{
            return [...prevState,item];
        })
    }
    console.log(equipments , 'Equipments Here');

    return (
        <div ref={drop} className="PanelBox" style={isOver ?{backgroundColor:"red"} : {backgroundColor:"green"}}>
            { equipments && equipments.length ?
              equipments.map((el)=><img src={el.imgsrc}/>)
              : ""
            }
        </div>
    )
}

export default PanelBox;
