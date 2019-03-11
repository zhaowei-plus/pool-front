import { createStore } from 'redux';
const ADD_TODO = 'ADD_TODO';
const initialState = {};

const reducer = function(state = initialState, action) {
  console.log('action:', action);
  switch(action.type) {
    case ADD_TODO: {
      return {
        text: action.payload,
      }
    }
  }
  return state;
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // 每次 dispatch 时触发
  console.log('subscribe:', store.getState());
});
// unsubscribe();

const state = store.getState();
console.log('state:', state);

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  }
}

const action = addTodo('Hello Redux');

store.dispatch(action);

console.log('state:', store.getState());