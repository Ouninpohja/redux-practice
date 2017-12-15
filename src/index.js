import React, {Component} from 'react'
import {render} from 'react-dom'
import {todo, todos, visibilityFilter} from './reducers'
import {createStore, combineReducers} from 'redux'

const reducer = combineReducers({
  todos,
  visibilityFilter
})
const store = createStore(reducer)
let nextId = 0
class App extends Component {
  render(){

    return (
      <div>
        <input ref={(input) => this.input = input}/>
        <button onClick={() => {
          store.dispatch({
            id: nextId++,
            type: 'ADD_TODO',
            text: this.input.value
          })
          this.input.value = ''
        }
        }
      >
        Add todo
      </button>
      <ul>
        {this.props.todos.map(
          todo => <li key={todo.id}>{todo.text}</li>)
        }
      </ul>
    </div>
    )
  }
}
const renderApp = () => {
  render(<App todos={store.getState().todos} />, document.getElementById('root'))
}
store.subscribe(renderApp)
renderApp()
