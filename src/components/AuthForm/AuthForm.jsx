import React, { useState } from "react";

import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import SupportLinks from "../SupportLinks/SupportLinks";
import "./AuthForm.css";

const AuthForm = ({ onFormSubmit }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <div className="form__header">Войдите в свой профиль</div>
      <form onSubmit={onFormSubmit}>
        <label>Логин</label>
        <MyInput
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          type="text"
          placeholder="Введите логин"
        />
        <label>Пароль</label>
        <MyInput
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="Введите пароль"
        />
        <MyButton
          className="myBtnLogin"
          onClick={() => {
            setLoginValue(""), setPasswordValue("");
          }}
        >
          <span className="login__text">ВОЙТИ</span>
        </MyButton>
      </form>
      <SupportLinks />
    </>
  );
};

export default AuthForm;
