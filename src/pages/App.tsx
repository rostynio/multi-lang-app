import React from 'react'
import { Header, Content } from '../components'
import '../styles/App.css'

const itemsList = [
  { id: 0, value: 'You can watch a movie' },
  { id: 1, value: 'You can do some sport' },
  { id: 2, value: 'You can make a pizza' },
  { id: 3, value: 'Your can read a book' },
  { id: 4, value: 'Your can sleep whole day' },
  { id: 5, value: 'And a lot of another things' },
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content itemsList={itemsList} />
    </div>
  )
}

export default App
