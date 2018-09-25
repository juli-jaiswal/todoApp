const initialState = {
  todo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todo: [...state.todo, action.value]
      };
  }
  return state;
};

export default reducer;
