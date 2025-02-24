import React from 'react'


type TodoListProps = {
  items : {Id : string, text : string}[]
}

const todoList : React.FC<TodoListProps> = (props) => {
    console.log(props.items)

  return (
    <div className='my-5'>todoList

    </div>
  )
}

export default todoList