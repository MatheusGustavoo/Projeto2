import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginReset from "./LoginReset";
import LoginLost from "./LoginLost";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginLost />} />
          <Route path="/reset" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
