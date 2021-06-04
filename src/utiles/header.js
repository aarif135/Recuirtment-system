import React from "react";

export default function Header({ title }) {
  return (
    <div
      style={{
        height: "4rem",
        marginTop: "02px",
        marginBottom: "10px",
        boxShadow: "4px 4px 4px lightgrey",
      }}
    >
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </div>
  );
}
