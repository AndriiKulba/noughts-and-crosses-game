import React from "react";
import Form from "../Form";
import s from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <Form />
      </div>
    </div>
  );
}
