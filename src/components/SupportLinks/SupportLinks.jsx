import React, { useState } from "react";

import Modal from "../UI/Modal/Modal";
import msg from "../../assets/images/message.svg";
import "./SupportLinks.css";

const SupportLinks = () => {
  const [forgotPassModal, setForgotPassModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <>
      <div className="form__links">
        <a
          className="form__link"
          href="#"
          onClick={() => setForgotPassModal(true)}
        >
          Я забыл пароль
        </a>
        <a
          className="form__link"
          href="#"
          onClick={() => setRegisterModal(true)}
        >
          Регистрация
        </a>
      </div>
      <div className="support__block">
        <img src={msg} alt="x" />
        <a className="support__link" href="#">
          Написать в поддержку
        </a>
      </div>
      <Modal visible={forgotPassModal} setVisible={setForgotPassModal}>
        <span>Вспоминай</span>
      </Modal>
      <Modal visible={registerModal} setVisible={setRegisterModal}>
        <span>Регистрация</span>
      </Modal>
    </>
  );
};

export default SupportLinks;