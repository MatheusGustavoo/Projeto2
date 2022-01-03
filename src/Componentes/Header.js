import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../Assets/LogoPetbook.png";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.Header}>
      <nav className="conteiner">
        <Link className={styles.logo} to="/">
          <img src={logo} alt="logo nike" />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
