import deepFreeze from 'deep-freeze'

const todos = (state=[], action) => {

  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return (
        state.map(todo => {
          if (todo.id !== action.id) {
            return todo
          }
          return { ...todo, completed: !todo.completed }
        })
      )
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
})
