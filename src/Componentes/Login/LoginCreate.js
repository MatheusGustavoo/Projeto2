import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../Hooks/useForm";
import Error from "../Helper/Error";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import useFetch from "../../Hooks/useFetch";

const LoginCreate = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Criar</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="email" type="text" name="email" {...email} />
        <Input label="Senha" type="text" name="password" {...password} />
        <Error error={error} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
      </form>
    </section>
  );
};

export default LoginCreate;
