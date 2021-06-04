export const authReducer = (
  state = { isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      state = {
        ...state,
        data: action.data,
        isLoading: action.isLoading,
        error: action.error,
      };
      return { ...state };
      break;
    case "SUCCESS_LOGIN":
      state = {
        ...state,
        data: action.data,
        isLoading: action.isLoading,
      };
    case "ERROR_LOGIN":
      state = { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
