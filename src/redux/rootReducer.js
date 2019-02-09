const UPDATE = 'UPDATE';

export const update = data => {
  return {
    type: UPDATE,
    data
  }
}

export default (state = {}, action) => {
  switch(action.type) {
    case UPDATE:
      return action.data;
    default:
      return state;
  }
};