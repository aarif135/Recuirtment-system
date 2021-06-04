import React, { useState, useEffect } from "react";
import { fetchAllStudents, deleteStudent } from "../config";
import Cards from "../utiles/cards";
import { Row, Col, Spin, Icon } from "antd";
import { useLocation } from "react-router-dom";
import { requestGetStudents } from "../Store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function ViewJobs() {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(requestGetStudents());
  }, []);
  useEffect(() => {}, [data.data]);
  const deleteCom = (docs) => {
    deleteStudent(docs);
  };
  const { state } = location;
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return (
    <>
      <h1>All students</h1>
      <Row>
        {data.isLoading ? (
          <Spin indicator={antIcon} />
        ) : (
          data.data.map((item) => {
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
          })
        )}
      </Row>
    </>
  );
}
export default ViewJobs;
