import React, { useEffect, useState } from "react";
import { getMyJob } from "../config";
import Card from "../utiles/cards";
import { Row, Col } from "antd";
import { Redirect } from "react-router-dom";
function Jobs() {
  const [allJob, setAllJob] = useState([]);
  let users =JSON.parse(localStorage.getItem("users")) ;

  useEffect(() => {
    console.log(users)
    if (users.userId) {
      myJobs(users.userId);
    }
  }, []);
  const myJobs = async (uId) => {
    const da = await getMyJob(uId);
    let data = [];
    da?.onSnapshot((item) => {
      item.forEach((docs) => {
        data.push(docs.data());
      });
      setAllJob(data);
    });
  };
  if (!users) {
    return <Redirect to="/" />;
  }
  return (
    <Row>
      <h1 style={{ textAlign: "center" }}>My Job</h1>
      {allJob.map((item, index) => {
        return (
          <Col span={6} offset={1}>
            <Card
              key={index}
              item={item}
              title={item.jobDesignation}
              type="company"
            />
          </Col>
        );
      })}
    </Row>
  );
}
export default Jobs;
