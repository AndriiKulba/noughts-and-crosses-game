import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { operations } from "../../redux/nought-crosses";
import s from "./Form.module.css";

export default function Form() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name1":
        setName1(value);
        break;
      case "name2":
        setName2(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.addPlayersName([name1, name2]));
    setName1("");
    setName2("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <div className={s.Field}>
        <input
          type="text"
          name="name1"
          value={name1}
          id={1}
          onChange={handleChange}
        />
        <label className={s.p1}>Name1</label>
      </div>
      <div className={s.Field}>
        <input
          type="text"
          name="name2"
          value={name2}
          id={2}
          onChange={handleChange}
        />
        <label className={s.p2}>Name2</label>
      </div>
      <button type="submit" className={s.Btn}>
        Submit
      </button>
    </form>
  );
}
