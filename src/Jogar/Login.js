import React from "react";
import styled from "styled-components";
import PopupCadastrar from "./Cadastro";
import PopupEsqueciSenha from "./Esqueci-senha";

function Login() {
  return (
    <Section>
      <Title>Entrar</Title>
      <PopupCadastrar />
      <Form class="form-login">
        <Input type="text" name="login" placeholder="Login" required />
        <Input
          type="password"
          name="senha"
          minlength="8"
          placeholder="Senha"
          required
        />
        <PopupEsqueciSenha />
        <InputPlayEntrar type="submit" name="play" value="Play" />
      </Form>
    </Section>
  );
}

//============================== Styles ======================================//

const Section = styled.section`
  background: #ffffff;
  margin: 100px 210px 100px 210px;
  padding: 50px;
  text-align: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-family: "Comfortaa", Open sans;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Input = styled.input`
  width: 70%;
  height: 50px;
  color: gray;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 25px;
  padding-left: 15px;
`;

const InputPlayEntrar = styled.input`
  width: 225px;
  height: 55px;
  background: #0080ff;
  border-radius: 10px;
  outline: 0;
  color: #ffffff;
  font-size: 26px;
  margin: 10px 0 10px 0;
`;

export default Login;
