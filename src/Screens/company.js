import React, { useState } from "react";
import { Button, Input } from "antd";
import Modal from "../utiles/modal";
import { postAJob, logout } from "../config";
import { useHistory, Redirect } from "react-router-dom";
import Header from "../utiles/header";

function Company() {
  const [isShowModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const history = useHistory();
  let users = JSON.parse(localStorage.getItem("users"));

  const handleShowModal = () => {
    setShowModal(true);
  };
  const onsubmit = async () => {
    postAJob(data, oncancel, users);
  };
  const oncancel = () => {
    setShowModal(false);
  };
  const onHandleChange = (value, type) => {
    setData({
      ...data,
      [type]: value,
    });
  };
  const inputStyle = { margin: "4px 0px 4px 0px" };
  const signOut = async () => {
    logout();
    history.push("/");
  };
  if (!users) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header title="Company Dashboard" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Modal
          showModal={isShowModal}
          title="Post a Job"
          handleShowModal={handleShowModal}
          modalTitle="Post a Job"
          onsubmit={onsubmit}
          oncancel={oncancel}
          content={[
            <Input
              placeholder="Job Designation"
              name="jobDesignation"
              style={inputStyle}
              onChange={(e) => onHandleChange(e.target.value, "jobDesignation")}
            />,
            <Input
              placeholder="Salary"
              name="salary"
              style={inputStyle}
              type="number"
              onChange={(e) => onHandleChange(e.target.value, "salary")}
            />,
            <Input
              placeholder="Required Skills"
              name="requiredSkills"
              style={inputStyle}
              onChange={(e) => onHandleChange(e.target.value, "requiredSkills")}
            />,
          ]}
          footerComponents={[
            <Button key="submit" type="primary" onClick={onsubmit}>
              Submit
            </Button>,
            <Button key="submit" type="primary" onClick={oncancel}>
              Cancel
            </Button>,
          ]}
        />
        <Button
          key="submit"
          type="primary"
          onClick={() => history.push("/students")}
        >
          View All student
        </Button>
        <Button
          key="submit"
          type="primary"
          onClick={() => history.push("/jobs")}
        >
          My job
        </Button>
        <Button key="submit" type="primary" onClick={signOut}>
          Logout
        </Button>
      </div>
    </>
  );
}
export default Company;
