import { ADD } from "../constants/action";
const initialState = {
  todo: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todo: [...state.todo, action.payload.value]
      };
    default:
      return state;
  }
};

export default reducer;
