import React from 'react'
import { useDrag } from 'react-dnd'

const ImageCard = ({id , imgsrc}) => {
    const [{isDragging} ,drag] = useDrag({
        type : "ImageCard",
        collect : monitor => ({
            isDragging : !!monitor.isDragging(),
        }),
    })
    return (
        <img ref={drag} style={isDragging ? {opacity:0.1} : {opacity:1}} width={40} height={40} src={imgsrc} onClick={()=>console.log(id , "id Here")}/>
    )
}

export default ImageCard
