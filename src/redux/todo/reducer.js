import { types } from './action';

const initState = [];

export default function todo(state = initState, action) {
  switch (action.type) {
    case types.GET_TODOS:
      return [...action.payload];

    default:
      return state;
  }
}
