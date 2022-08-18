import React from 'react';
import { useDraggable } from '@dnd-kit/core';

interface Props {
  id: string;
  children?: React.ReactNode;
}

const Draggable = (props: Props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: props.id,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    border: isDragging ? '1px solid red' : '2px solid black',
    padding: 4,
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
};

export default Draggable;
