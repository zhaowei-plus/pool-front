console.log('************************************** redux原理与自定义实践 ***************************************');
// redux原理与自定义实践
const ADD_TODO = 'ADD_TODO';
// Action Creater
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  }
}
const initialState = { text: '' };
const reducer = (state = initialState, action) => {
  if (action.type == ADD_TODO) {
    return {
      ...state,
      text: action.payload,
    }
  }
  return state;
}
const createStore = (reducer, preInitialState = {}) => {
  // 闭包实践
  let state = preInitialState;
  let listeners = [];

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(d => d !== listener);
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe( () => {
  console.log('subscribe:', store.getState());
});
store.dispatch(addTodo('Hello Redux'));
unsubscribe();
store.dispatch(addTodo('Hello Redux'));
console.log('************************************** -----end------ ***************************************');












