import { createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'

const history = createBrowserHistory()

const App: React.FC = () => (
    <Router history={history}>
      <Routes/>
    </Router>
)

export default App
