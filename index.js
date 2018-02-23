// 1. Create a store
let store = Redux.createStore(reducer, [])

console.log('initial state: ', store.getState())

// 2. Create action
function addTodo(newTodo) {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  }
}

// 3. Create reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat(action.payload)
    default:
    return state;
  }
}

let submitButton = document.querySelector('#submit-button').addEventListener('click', () => {
  let todoValue = document.querySelector('#new-todo').value
  store.dispatch(addTodo(todoValue))
})

store.subscribe(() => generateTodoHTML(store.getState()))

function generateTodoHTML(arrOfTodos) {
  let todoList = document.querySelector('#todo-list')
  let newList = document.createElement('ul')
  arrOfTodos.forEach(todo => {
    let newListItem = document.createElement('li')
    newListItem.innerText = todo
    newList.appendChild(newListItem)
  })
  console.log('newlist', newList)
  todoList.innerHTML = ''
  todoList.appendChild(newList)
}