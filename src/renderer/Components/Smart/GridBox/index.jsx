import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './GridBox.scss';
import { useDrag, useDrop } from 'react-dnd';
import GridColumn from '../GridColumn';
const PanelBox = React.forwardRef((props,ref) => {
  const { panelTheme: backgroundTheme, panelDimensions: dimensions , panelMaterials: material} = useSelector(({ panelTheme,panelDimensions, panelMaterials }) => ({
    panelTheme: panelTheme.panelTheme,
    panelDimensions:panelDimensions.panelDimensions,
    panelMaterials: panelMaterials.panelMaterials,
  }));
 console.log("isGridBOX Rendered")
  const generateGridRows = () => {
    const widthSection = dimensions?.length * 3.77;
    const noOfColumns = Math.trunc(widthSection / 50);
    const gridRows = [];
    const sectionHeight = dimensions?.height * 3.77;
    const nofRows = Math.trunc(sectionHeight / 70);
    console.log(nofRows , " no of ROws")
    const totalSection = noOfColumns * nofRows;
    for(let i=1;i<=totalSection;i++){
      gridRows.push(<GridColumn ColumnID={`Column${i}`}/>)
    }
    return gridRows;

  }
 

      return (
        <div  className="PanelBox" ref={ref} style={{width:`${(dimensions.length)*3.77}px` ,
          height:`${(dimensions.height)*3.77}px`,
          border: `${dimensions.cedges ? (dimensions.thickness)*3.77 : 0}px solid #d4d4d4`,
          borderRadius:`${(dimensions.diameter)*3.77}px`,
          backgroundColor:material==='Anodised aluminium' ? '#a79f8e' : material=='Plexiglass (matte)'  ? ' #171717' : material==='Plexiglass (gloss)'  ? '#0D5BE1' : backgroundTheme
          }}>
          {generateGridRows()}
        </div>
    )
})

export default PanelBox;
