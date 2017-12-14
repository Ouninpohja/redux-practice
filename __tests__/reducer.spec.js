import deepFreeze from 'deep-freeze'
import {todo, todos, visibilityFilter} from '../src/reducers'

describe('reducer tests', () => {
  test('add todos', ()=> {
    const beforeState = []
    const expectedState = [
      {
        id: 1,
        text: 'todo1',
        completed: false
      }
    ]
    const action = {
      id: 1,
      text: 'todo1',
      type: "ADD_TODO"
    }
    deepFreeze(beforeState)
    deepFreeze(action)

    expect(todos(beforeState,action)).toEqual(expectedState)
  })

  test('toggle todo', () => {
    const beforeState = [
      {
        id: 1,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 2,
        text: 'Learn play the drums',
        completed: false
      }
    ]
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    const expectedState = [
      {
        id: 1,
        text: 'Learn Redux',
        completed: true
      },
      {
        id: 2,
        text: 'Learn play the drums',
        completed: false
      }
    ]
    expect(todos(beforeState, action)).toEqual(expectedState)
  })


  test('visibilityFilter', () => {
    const beforeState = undefined
    const action = {
      type: undefined,
      filter: undefined
    }
    const expectedState = 'SHOW_ALL'

    expect(visibilityFilter(beforeState, action)).toEqual(expectedState)
  })

  test('setVisibilityFilter', () => {
    const beforeState = undefined
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }
    const expectedState = 'SHOW_COMPLETED'

    expect(visibilityFilter(beforeState, action)).toEqual(expectedState)
  })
})
