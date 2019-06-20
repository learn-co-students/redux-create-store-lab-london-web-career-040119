export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    return state;
  }

  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' });

  return {
    getState,
    dispatch,
  };
}

function render() {
  const container = document.getElementById('container');
}
