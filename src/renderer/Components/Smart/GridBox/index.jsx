import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './GridBox.scss';
import { useDrag, useDrop } from 'react-dnd';
import GridColumn from '../GridColumn';
const PanelBox = () => {
  const { panelTheme: backgroundTheme, panelDimensions: dimensions , panelMaterials: material} = useSelector(({ panelTheme,panelDimensions, panelMaterials }) => ({
    panelTheme: panelTheme.panelTheme,
    panelDimensions:panelDimensions.panelDimensions,
    panelMaterials: panelMaterials.panelMaterials,
  }));

  const gridRows=[];


  for(let i=1;i<=dimensions.rows;i++){
    gridRows.push(<GridColumn ColumnID={`Column${i}`}/>)
  }


  const [selectedMaterial,setSelectedMaterial]=useState(material);
      return (
        <div  className="PanelBox" style={{width:`${(dimensions.length)*3.77}px` ,
          height:`${(dimensions.height)*3.77}px`,
          border: `${(dimensions.thickness)*3.77}px solid #000`,
          borderRadius:`${(dimensions.diameter)*3.77}px`,
          backgroundColor:`${backgroundTheme}`}}>
          {gridRows}
        </div>
    )
}

export default PanelBox;
