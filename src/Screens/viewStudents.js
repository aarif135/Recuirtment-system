import React, { useState, useEffect } from "react";
import { fetchAllStudents,deleteStudent } from "../config";
import Cards from "../utiles/cards";
import { Row, Col } from "antd";
import { useLocation } from "react-router-dom";

function ViewJobs() {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const allStudents = await fetchAllStudents();
    allStudents.onSnapshot((docs) => {
      let data = [];
      docs.forEach((item) => {
        data.push({ ...item.data(), docId: item.id });
      });
      setStudents(data);
    });
  };
  const deleteCom = (docs) => {
    deleteStudent(docs)
  };
  const { state } = location;
  return (
    <>
      <h1>All students</h1>
      <Row> </Row>
      {students.map((item) => {
        return (
          <Col span={6} offset={1}>
            <Cards
              item={item}
              type="student"
              title={item.fullName}
              state={state}
              deleteCom={deleteCom}
            />
          </Col>
        );
      })}
    </>
  );
}
export default ViewJobs;
