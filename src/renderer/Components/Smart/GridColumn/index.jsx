import { isDate } from 'moment';
import React, {useState , useRef ,useCallback} from 'react'
import { useDrop , useDrag} from 'react-dnd';
import { itemTypes  } from 'renderer/utils/DndTypes';
import ImageCard from 'renderer/Components/Presentational/ImageCard/ImageCard';
import update from 'immutability-helper';
import Column from 'antd/lib/table/Column';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GridColumn.scss";
const GridColumn = ({ColumnID}) => {
    const {  panelDimensions: dimensions } = useSelector(({ panelDimensions }) => ({
        panelDimensions:panelDimensions.panelDimensions,
      }));
    const isGridOn = useSelector((state)=>state.panel.isGrid)
    console.log("rendered");
    const ref = useRef(null);
    const [equipments,setEquipments] = useState([]);
    const [{isOver}, drop] = useDrop({
        accept : itemTypes.CARD,
        drop : (item,monitor) => moveOver(item),
        collect : monitor => ({
            isOver : !!monitor.isOver(),
        })
    })

    // const [{isDragging} ,drag] = useDrag({
    //     type : itemTypes.CARD,
    //     item : {
    //         title : title,
    //         imgsrc : imgsrc
    //     },
    //     collect : monitor => ({
    //         isDragging : !!monitor.isDragging(),
    //     }),
    // })
     const notifyError =() =>{
        return toast.error("Cannot place item here" ,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            })
     }
    const moveOver = (item) => {


        if(equipments.length === 0) {
            item.id = 1;
        }
        else {
            item.id = equipments[equipments.length-1]?.id + 1;
        }
        var children = document.getElementById(`${ColumnID}`).children;
        var totalWidth = 0;
       for (var i = 0; i < children.length; i++) {
        totalWidth += children[i].offsetWidth;
       }
       if(document.getElementById(`${ColumnID}`).offsetWidth - totalWidth > 40 ) {
        setEquipments((prevState)=>{
            return [...prevState,item];
        })
    }
    else {
        notifyError();
    }
    }
    const deleteEquipment = (id) => {
        const tempEquipments = equipments.filter((el)=>el.id !== id);
        setEquipments([...tempEquipments]);
    }

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = equipments[dragIndex];
        setEquipments(update(equipments, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [equipments]);
    drop(ref);
    return (
        <>
        <div id={ColumnID} ref={ref} style={isGridOn ? {border:'2px dotted gray'} : {}} className='main-div'>
              { equipments && equipments.length ?
              equipments.map((el,i)=><ImageCard  id={el.id} imgsrc={el.imgsrc} index={i} moveCard={moveCard} deleteEquipment={deleteEquipment} />)
              : ""
            }
        </div>
        </>
    )
}

export default GridColumn
