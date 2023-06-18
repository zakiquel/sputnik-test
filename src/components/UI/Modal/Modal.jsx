import React from "react";
import "./Modal.css";
import icon from "../../../assets/images/cross.svg";

const Modal = ({ children, visible, setVisible }) => {
  return (
    <div
      className={`myModal ${visible === true ? "active" : ""}`}
      onClick={() => setVisible(false)}
    >
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="icon" onClick={() => setVisible(false)}>
          <img className="cross" src={icon} alt="X" height="25" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
