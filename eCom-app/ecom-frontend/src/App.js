import React from 'react'
import { Routes, Route } from 'react-router-dom'

const FrontPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>Milk</li>
        <li>Apple</li>
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div className='center'>
      <Routes>
        <Route path='/' element={<FrontPage/>} />
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App