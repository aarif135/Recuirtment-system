import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import { RegisterWithEmail } from "../config";
const { Option } = Select;

function Signup() {
  let history = useHistory();
  const [userInfo, setUserInfo] = useState({ role: "student" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    await RegisterWithEmail(email, password, userInfo, () => history.push("/"));
  };
  const onHandleChange = (value, type) => {
    console.log(value);
    setUserInfo({
      ...userInfo,
      [type]: value,
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
      <h1 style={{ textAlign: "center" }}>Signup Form </h1>
      <Form.Item>
        <Input
          placeholder="Full Name"
          name="fullName"
          onChange={(e) => onHandleChange(e.target.value, "fullName")}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Email"
          name="email"
          onChange={(e) => onHandleChange(e.target.value, "email")}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="password"
          name="password"
          type="password"
          onChange={(e) => onHandleChange(e.target.value, "password")}
        />
      </Form.Item>
      <Select value={userInfo.role} onChange={(e) => onHandleChange(e, "role")}>
        <Option value="student">Student</Option>
        <Option value="company">Company</Option>
      </Select>
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" htmlType="submit" className="Signup-form-button">
          Signup
        </Button>

        <p
          onClick={() => history.push("/")}
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Already an account?
        </p>
      </Form.Item>
    </Form>
  );
}
export default Signup;
