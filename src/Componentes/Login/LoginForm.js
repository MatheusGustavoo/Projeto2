import React from "react";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import styles from "./LoginForm.module.css";
import stylesbtn from "../forms/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, carregando } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {carregando ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.sub}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se agora</p>
        <Link className={stylesbtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
