export const loginRequest = (body, stdCb, companyCb, adminCb) => {
  return {
    type: "LOGIN_REQUEST",
    body,
    stdCb,
    companyCb,
    adminCb,
    isLoading: true,
    data:{},
    error:null
  };
};
export const succesLoginRequest = (data) => {
  return {
    type: "SUCCESS_LOGIN",
    data,
    isLoading: false,
    error:null
  };
};

export const errorLoginRequest = (error) => {
  return {
    type: "ERROR_LOGIN",
    error,
    isLoading: false,
  };
};
