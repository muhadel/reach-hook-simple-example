import axios from 'axios';

export const types = {
  GET_TODOS: 'GET_TODOS',
  GET_TODOS_FAILURE: 'GET_TODOS_FAILURE',
};

export const getTodos = () => async (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => dispatch({ type: types.GET_TODOS, payload: response.data }))
    .catch((err) => dispatch({ type: types.GET_TODOS_FAILURE, payload: 'Error' }));
};

// export function createAction(type, payload = undefined, error = false, meta = null) {
//   return { type, payload, error, meta };
// }
