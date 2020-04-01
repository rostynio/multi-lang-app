import React from 'react'
import { Header, Content } from '../components'
import '../styles/App.css'
import {itemsList} from '../constants/itemsList'

const TodoList = () => {
  return (
    <div className='App'>
      <Header />
      <Content itemsList={itemsList} showLink/>
    </div>
  )
}

export default TodoList
