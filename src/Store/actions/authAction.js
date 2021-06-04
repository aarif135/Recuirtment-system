export const loginRequest = (body,stdCb,companyCb,adminCb) => {
  return {
    type: "LOGIN_REQUEST",
    body,
    stdCb,
    companyCb,
    adminCb
  };
};
