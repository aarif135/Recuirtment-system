export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      state = {
        ...state,
        data: action.data,
      };
      return { ...state };
      break;
    default:
      return state;
  }
};
