export const studentReducer = (
  state = { isLoading: false, error: null, data: [] },
  action
) => {
  switch (action.type) {
    case "GET_ALL_STUDENTS":
      return { ...state, isLoading: action.isLoading, error: action.error };
    case "SUCCESS_ALL_STUDENTS":
      const { data } = action;
      return { ...state, data, isLoading: action.isLoading };
    default:
      return { ...state };
  }
};
