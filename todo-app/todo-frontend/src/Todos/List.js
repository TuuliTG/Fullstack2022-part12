import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  
  return (
    <>
      {todos.map(todo => {
        return (
          <Todo key={todo.text} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}></Todo>
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
