import React from "react";
import { Card } from "antd";

export default function Cards({ item, title, type, deleteCom, state }) {
  const {
    jobDesignation,
    requiredSkills,
    salary,
    fullName,
    email,
    qulification,
    experience,
    faculty,
    docId,
  } = item;
  console.log(state);
  return (
    <div
      style={{
        boxShadow: "2px 2px 2px lightgrey",
        width: "100%",
        margin: "10px",
        border: "solid lightgrey 1px",
      }}
    >
      {type === "company" ? (
        <Card title={title} bordered={false} style={{ width: 300 }}>
          {state ? (
            <h3
              onClick={() => deleteCom(docId)}
              style={{ textAlign: "right", cursor: "pointer" }}
            >
              Delete
            </h3>
          ) : (
            ""
          )}
          <p>Job Designation:{jobDesignation}</p>
          <p>Required Skills:{requiredSkills}</p>
          <p>Salary:{salary}</p>
        </Card>
      ) : (
        <Card title={title} bordered={false} style={{ width: 300 }}>
          {state ? (
            <h3
              onClick={() => deleteCom(docId)}
              style={{ textAlign: "right", cursor: "pointer" }}
            >
              Delete
            </h3>
          ) : (
            ""
          )}
          <p>Name:{fullName || "Nil"}</p>
          <p>Email:{email || "Nil"}</p>
          <p>Qulification:{qulification || "Nil"}</p>
          <p>Experience:{experience || "Nil"}</p>
          <p>Faculty:{faculty || "Nil"}</p>
        </Card>
      )}
    </div>
  );
}
