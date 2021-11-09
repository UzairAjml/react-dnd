import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './GridBox.scss';
const PanelBox = () => {
  const { panelTheme: backgroundTheme, panelDimensions: dimensions , panelMaterials: material} = useSelector(({ panelTheme,panelDimensions, panelMaterials }) => ({
    panelTheme: panelTheme.panelTheme,
    panelDimensions:panelDimensions.panelDimensions,
    panelMaterials: panelMaterials.panelMaterials,
  }));
  const [selectedMaterial,setSelectedMaterial]=useState(material);
    return (
        <div className="PanelBox"
        style={{
          backgroundColor:`${backgroundTheme}` ,
          width:`${(dimensions.length)*3.77}px` ,
          height:`${(dimensions.height)*3.77}px`,
          border: `${(dimensions.thickness)*3.77}px solid #000`,
          borderRadius:`${(dimensions.diameter)*3.77}px`
          }}>
        </div>
    )
}

export default PanelBox;
