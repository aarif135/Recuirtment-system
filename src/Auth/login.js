import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { loginWithEmail } from "../config";
import { loginRequest } from "../Store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const data = useSelector((state) => state.authReducer);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    dispatch(
      loginRequest(
        { email, password },
        () => {
          history.push("/student");
        },
        () => {
          history.push("/company");
        },
        () => {
          history.push("/admin");
        }
      )
    );
  };
  const onHandleChange = (e, type) => {
    setUserInfo({
      ...userInfo,
      [type]: e.target.value,
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        width: "40%",
        margin: "auto",
        border: "solid lightgrey 1px",
        marginTop: "30px",
        boxShadow: "4px 4px 4px lightgrey",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Login Form </h1>
      <Form.Item>
        <Input
          placeholder="Email"
          name="email"
          onChange={(e) => onHandleChange(e, "email")}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => onHandleChange(e, "password")}
        />
      </Form.Item>
      {data.error ? <p style={{textAlign:"center",color:"red"}}>{data.error}</p> : ""}

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button
          loading={data.isLoading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
        <p
          onClick={() => history.push("signup")}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Register Now!
        </p>
      </Form.Item>
    </Form>
  );
}
export default Login;
