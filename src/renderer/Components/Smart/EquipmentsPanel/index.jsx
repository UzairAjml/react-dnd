import { Card} from 'antd';
import React from 'react';
import { Equipments } from 'renderer/config/accessories';
import EquipmentCard from 'renderer/Components/Presentational/EquipmentCard/EquipmentCard';
import './EquipmentsPanel.scss';
const EquipmentsPanel = () => {

    const renderEquipments = () => {
      const renderedEquipments = Object.keys(Equipments).map((item)=>{
          const EquipmentJSX = (
              <>
                   <h2 style={{borderBottom:"1px solid red"}} >{item}</h2>
                   <div className="equipment-cards">
                       {
                           Equipments[item].map((el)=>{
                             return <EquipmentCard key={el.id} title ={el.title} imgsrc = {el.imgsrc} />
                           })

                       }
                   </div>

              </>
          )
        //   return Equipments[item].map((el)=>{
        //       return <div >
        //           <h2 style={{borderBottom:"1px solid red"}} >{item}</h2>
        //       </div>
        //   })
        return EquipmentJSX;
      })
      
      return renderedEquipments;
    }
    return (
        <Card style={{borderRadius:'7%',  border:'2px solid black',margin:'5px' ,height:"100%", overflowY:"scroll"}}>
           {renderEquipments()}
        </Card>
    )
}

export default EquipmentsPanel