import { useDroppable } from '@dnd-kit/core'
import React from 'react'

function DropAbleArea({children,id}) {
  const { setNodeRef,isOver}= useDroppable({
    id
  })
  return (
    <div ref={setNodeRef}>
      {children}
    </div>
  )
}

export default DropAbleArea
