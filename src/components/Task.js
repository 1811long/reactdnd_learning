import React, { useRef } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
 border: 1px solid lightgrey;
 border-radius: 2px;
 padding: 8px;
 margin-bottom: 8px;
`;

const Task = ({ task, index }) => {
    const ref = useRef(null)

    return (
        <Draggable
            draggableId={task.id}
            index={index}
        >
            {(provided) => (
                < Container 
                    ref = {provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                > 
                    { task.content }
                    {provided.placeholder}
                </Container>
            )}
    </Draggable >
  )
}

export default Task
