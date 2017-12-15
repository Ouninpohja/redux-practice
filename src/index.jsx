import React from 'react'
import {render} from 'react-dom'
import {todo, todos, visibilityFilter} from './reducers'
import {createStore, combineReducers} from 'redux'

const reducer = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(reducer)
const App = () => {
  return (
    <div>
      Hello
    </div>
  )
}
render(<App/>, document.getElementById('app'))
