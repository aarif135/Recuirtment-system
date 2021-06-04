import React, { useState, useEffect } from "react";
import { fetchAllJobs,deleteCompany } from "../config";
import Cards from "../utiles/cards";
import { Row, Col } from "antd";
import { Redirect,useLocation } from "react-router-dom";

function AllJobs() {
  const location=useLocation();
  const [job, setJobs] = useState([]);
  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = async () => {
    (await fetchAllJobs()).onSnapshot((docs) => {
      let data = [];
      docs.forEach((item) => {
        data.push({ ...item.data(), docId: item.id });
      });
      setJobs(data);
    });
  };
  let users = localStorage.getItem("users");
  if (!users) {
    return <Redirect to="/" />;
  }
  const deleteCom=(docId)=>{
    deleteCompany(docId)
  }
const {state}=location  
  return (
    <Row>
      <h1 style={{ textAlign: "center" }}>List of Jobs</h1>
      {job.map((item, index) => {
        return (
          <Col span={6} offset={1}>
            <Cards
              key={index}
              item={item}
              title={item.jobDesignation}
              type="company"
              state={state}
              deleteCom={deleteCom}
            />
          </Col>
        );
      })}
    </Row>
  );
}
export default AllJobs;
