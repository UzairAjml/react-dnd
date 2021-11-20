import React, {useState} from 'react'
import { useDrop } from 'react-dnd';
import { itemTypes } from 'renderer/utils/DndTypes';
const GridColumn = () => {
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
        <div ref={drop} style={{display:"flex" , width:"100%" , border:"1px solid red"  , height:"60px" , marginBottom:"10px"}}>
              { equipments && equipments.length ?
              equipments.map((el)=><img width={40} height={40} src={el.imgsrc}/>)
              : ""
            }
        </div>
    )
}

export default GridColumn
