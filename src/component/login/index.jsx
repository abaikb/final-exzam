import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./login.css";

const Login = () => {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required("Введите логин")
      .min(5, "Логин должен содержать минимум 5 символов"),
    password: Yup.string()
      .required("Введите пароль")
      .test(
        "password",
        "Пароль должен содержать минимум 5",
        (value) => {
          const commonPasswords = ["123456", "password", "123456789"];
          return (
            value &&
            value.length >= 5 &&
            !commonPasswords.includes(value.toLowerCase())
          );
        }
      ),
  });
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginSchema.validate({ username, password }, { abortEarly: false });
      console.log("Username:", username);
      console.log("Password:", password);
      setUsername("")
      setPassword("")
      setErrors({});
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="wrapper-login">
      <form onSubmit={handleSubmit} className="p-3 rounded shadow form">
        <h1 className="text-center mb-4">Вход</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            placeholder="Логин"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Войти
        </button>
        <div className="link">
        Нет аккаунта?<Link to="/signup">Зарегистрируйся</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
