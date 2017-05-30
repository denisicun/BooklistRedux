// state argument is not app state, only the state the reducer is responsible for
export default function(state = null, action){
  // switch over the action, and if it is relevent for us, we will return the payload
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
