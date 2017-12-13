import deepFreeze from 'deep-freeze'

const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return (
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      )
    case 'TOGGLE_TODO':
          if (state.id !== action.id) {
            return state
          }
        return {
          ...state,
          completed: !state.completed
        }
    default:
        return state
  }
}

const todos = (state=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default: return state
  }
}

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

  const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
        break;
    
      default:
        return state
        break;
    }
  }

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
