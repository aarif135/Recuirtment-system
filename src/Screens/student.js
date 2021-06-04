import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import { useHistory, Redirect } from "react-router-dom";
import Modal from "../utiles/modal";
import { postStudentDetail, logout, checkIfExist } from "../config";
import Header from "../utiles/header";

function Student() {
  const [isShowModal, setShowModal] = useState(false);
  const [userData, setData] = useState({});
  const [isEmpty, setEmpty] = useState(false);
  let users = JSON.parse(localStorage.getItem("users"));
  const history = useHistory();

  useEffect(() => {
    checkUser();
  }, []);
  const checkUser = async () => {
    const check = await checkIfExist(users);
    if (!check) {
      setEmpty(true);
    }
  };
  const oncancel = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const inputStyle = { margin: "4px 0px 4px 0px" };
  const onHandleChange = (value, type) => {
    setData({
      ...userData,
      [type]: value,
    });
  };
  const onUpdate = async () => {
    const updated = await postStudentDetail(
      { ...userData, email: users.email, userId: users.userId },
      oncancel
    );
  };
  const signOut = async () => {
    logout();
    history.push("/");
  };
  if (!users) {
    return <Redirect to="/" />;
  }  return (
    <>
      <Header title="Student Dashboard" />
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
          title="Update Profile"
          handleShowModal={handleShowModal}
          modalTitle="Update Profile"
          onsubmit={onsubmit}
          oncancel={oncancel}
          content={[
            <Input
              placeholder="Full Name"
              name="fullName"
              style={inputStyle}
              type="text"
              defaultValue={userData.fullName}
              onChange={(e) => onHandleChange(e.target.value, "fullName")}
            />,
            <Input
              placeholder="Experience"
              name="requiredSkills"
              style={inputStyle}
              defaultValue={userData.experience}
              onChange={(e) => onHandleChange(e.target.value, "experience")}
            />,
            <Input
              placeholder="Faculty"
              name="faculty"
              style={inputStyle}
              defaultValue={userData.faculty}
              onChange={(e) => onHandleChange(e.target.value, "faculty")}
            />,

            <Input
              placeholder="Qulification"
              name="qulification"
              style={inputStyle}
              defaultValue={userData.qulification}
              onChange={(e) => onHandleChange(e.target.value, "qulification")}
            />,
          ]}
          footerComponents={[
            !isEmpty ? (
              <>
                <Button key="submit" type="primary" onClick={onUpdate}>
                  update
                </Button>
                ,
                <Button key="submit" type="primary" onClick={oncancel}>
                  Cancel
                </Button>
              </>
            ) : (
              "Data already exist"
            ),
          ]}
        />
        <Button
          key="submit"
          type="primary"
          onClick={() => history.push("/job")}
        >
          View Jobs
        </Button>
        <Button key="submit" type="primary" onClick={signOut}>
          Logout
        </Button>
      </div>
    </>
  );
}
export default Student;
