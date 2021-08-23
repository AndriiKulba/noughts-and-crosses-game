import React from "react";
import s from "./Gamefield.module.css";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/nought-crosses";
import Board from "../Board";
import Playerboard from "../Playerboard";
import Modal from "../Modal/Modal";

export default function Gamefield() {
  const isShowModal = useSelector(selectors.getShowModal);
 
 

  return (
    <>
      <h1 className={s.title}>Noughts&Crosses</h1>
      <div className={s.Gamefield}>
        <Board />
        <Playerboard />
        {isShowModal && <Modal />}
      </div>
    </>
  );
}
