import React from "react";
import { Button } from "antd";
import { useHistory, Redirect } from "react-router-dom";
import { logout } from "../config";
import Header from "../utiles/header";

function Admin() {
  const history = useHistory();
  const signOut = async () => {
    logout();
    history.push("/");
  };
  let users = localStorage.getItem("users");
  if (!users) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header title="Admin Dashboard" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Button
          key="submit"
          type="primary"
          onClick={() =>
            history.push({ pathname: "/students", state: "admin" })
          }
        >
          View All student
        </Button>
        <Button
          type="primary"
          onClick={() => history.push({ pathname: "/job", state: "admin" })}
        >
          View All jobs
        </Button>
        <Button type="primary" onClick={signOut}>
          Logout
        </Button>
      </div>
    </>
  );
}
export default Admin;
