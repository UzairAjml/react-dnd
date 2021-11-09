import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './GridBox.scss';
import { itemTypes } from 'renderer/utils/DndTypes';
import { useDrag, useDrop } from 'react-dnd';
const PanelBox = () => {
  const { panelTheme: backgroundTheme, panelDimensions: dimensions , panelMaterials: material} = useSelector(({ panelTheme,panelDimensions, panelMaterials }) => ({
    panelTheme: panelTheme.panelTheme,
    panelDimensions:panelDimensions.panelDimensions,
    panelMaterials: panelMaterials.panelMaterials,
  }));
  const [selectedMaterial,setSelectedMaterial]=useState(material);
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
        <div ref={drop} className="PanelBox" style={{width:`${(dimensions.length)*3.77}px` ,
          height:`${(dimensions.height)*3.77}px`,
          border: `${(dimensions.thickness)*3.77}px solid #000`,
          borderRadius:`${(dimensions.diameter)*3.77}px`}}>
            { equipments && equipments.length ?
              equipments.map((el)=><img src={el.imgsrc}/>)
              : ""
            }
        </div>
    )
}

export default PanelBox;
