import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

test('renders content', () => {
    const todo = {
      text: 'Test text',
      done: false
    }
  
    render(<Todo todo={todo} />)
  
    const element = screen.getByText('Test text')
    expect(element).toBeDefined()
  })

