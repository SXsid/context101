import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ADDTodos from './components/ADDTodos'
import { Provider } from 'react-redux'
import {store} from "./app/store"
import Todos from './components/Todos'
function App() {
  

  return (
    <Provider store={store}>
      <div>
      <ADDTodos/>
      <Todos/>
    </div>
    </Provider>
  )
}

export default App
