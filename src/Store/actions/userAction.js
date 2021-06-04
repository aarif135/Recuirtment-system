export const requestGetStudents = () => {
  return {
    type: "GET_ALL_STUDENTS",
    isLoading: true,
    error: null,
  };
};
export const successGetStudent = (data) => {
  return {
    type: "SUCCESS_ALL_STUDENTS",
    isLoading: false,
    error: null,
    data,
  };
};
