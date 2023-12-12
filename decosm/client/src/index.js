import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk' // permet de faire des requetes asynchrones avec redux
// import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const theStore = configureStore({
  reducer: rootReducer,
	// middleware: [thunk, logger], // si on veut avoir deux devtools à savoir le devtools qui se trouve dans le navigateur et celui dans la console (logger), on ecrit le middelware comme ceci mais par contre si on veut juste celui dans le navigateur on annulle le logger.
  middleware: [thunk],
  devTools: true
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={theStore}>
    <App />
  </Provider>
)
