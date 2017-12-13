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
    default: return state
  }
}
describe('reducer tests', () => {
  test('add todos', ()=> {
    const beforeState = []
    const afterState = [
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

    expect(todos(beforeState,action)).toEqual(afterState)
  })
})
