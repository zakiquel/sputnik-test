import React, { useState } from "react";

import MyButton from "../../components/UI/button/MyButton";
import Modal from "../../components/UI/Modal/Modal";
import AuthForm from "../../components/AuthForm/AuthForm";

import "./Authorization.css";

const Authorization = () => {
  const [modal, setModal] = useState(false);
  const onFormSubmit = (e) => {
    setModal(false);
    e.preventDefault();
  };

  return (
    <div className="authorization">
      <div className="title">
        <h1 className="title__item__web">Web</h1>
        <h1 className="title__item">App</h1>
      </div>
      <MyButton className="myBtn" onClick={() => setModal(true)}>
        <span className="myBtn__text">Авторизоваться</span>
      </MyButton>
      <Modal visible={modal} setVisible={setModal}>
        <AuthForm onFormSubmit={onFormSubmit} visible={setModal} />
      </Modal>
    </div>
  );
};

export default Authorization;
