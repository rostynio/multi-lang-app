import React from 'react'
import { Header, Content } from '../components'
import '../styles/App.css'
import { itemsList } from '../constants/itemsList'

const FilmsList = () => {
  return (
    <div className='App'>
      <Header />
      <Content itemsList={itemsList} />
    </div>
  )
}

export default FilmsList
