import React, { useState } from "react";
import { Modal, Button } from "antd";

function Model({
  showModal,
  title,
  handleShowModal,
  modalTitle,
  footerComponents,
  content,
  oncancel
}) {
  return (
    <>
      <Button type="primary" onClick={handleShowModal}>
        {title}
      </Button>
      <Modal onCancel={oncancel} title={modalTitle} visible={showModal} footer={footerComponents}>
        {content.map((item) => {
          return <> {item}</>;
        })}
      </Modal>
    </>
  );
}
export default Model;
