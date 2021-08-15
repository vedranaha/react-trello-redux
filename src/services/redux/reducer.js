const initialState = {
  visibility: "ALL",
  todos: [
    {
      text: "Eat",
      id: 1,
      completed: false,
    },
    {
      text: "Sleep",
      id: 2,
      completed: false,
    },
    {
      text: "Swimm",
      id: 3,
      completed: false,
    },
  ],
};

function reducer(state = initialState, action) {
  console.log("reducer. action:", action);

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: action.completed || false,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_COMPLETED_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    case "CHANGE_VISIBILITY":
      return {
        ...state,
        visibility: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
