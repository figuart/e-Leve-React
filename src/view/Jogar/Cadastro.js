import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const PopupCadastrar = () => (
  <Popup className="modal-body"
    trigger={
      <LinkCadastrar to="#Cadastro">
        Ainda não é cadastrado? Clique aqui!
      </LinkCadastrar>
    }
    modal
    closeOnDocumentClick
  >
    <section>
      <Title>Cadastre-se</Title>
      <Form className="form-group col-12 justify-content-center">
        <Input type="text" name="login" placeholder="Login" required />
        <Input type="text" name="nome" placeholder="Nome" required />
        <Input type="text" nome="sobrenome" placeholder="Sobrenome" required />
        <DivGenNasc>
          <SpanGen className="col-md-5 col-sm-6">
            Genero:
            <Select>
              <option value="select">Selecione...</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="outher">Outro</option>
            </Select>
          </SpanGen>
          <SpanNasc className="col-md-5 col-sm-6" id="span-nascimento">
            Nascimento:
            <InputNascimento type="date" name="nascimento" required />
          </SpanNasc>
        </DivGenNasc>
        <Input type="email" name="email" placeholder="Email" required />
        <DivCpfTel>
          <InputMedium col-md-5 col-sm-6
            type="text"
            name="cpf"
            minlength="11"
            className="cpf col-md-5 col-sm-6"
            placeholder="CPF"
            required
          />
          <InputMedium className="col-md-5 col-sm-6"
            type="tel"
            name="telefone"
            placeholder="Telefone"
            required
          />
        </DivCpfTel>
        <Input
          type="password"
          name="senha"
          minlength="8"
          placeholder="Senha"
          required
        />
        <Input
          type="password"
          name="confirmacao-senha"
          minlength="8"
          placeholder="Confirmação de senha"
          required
        />
        <InputPlayEntrar type="submit" name="play" value="Play" />
      </Form>
    </section>
  </Popup>
);

/*================================= Styles ===================================*/
const LinkCadastrar = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 25px;
`;

const Title = styled.h1`
  font-family: "Comfortaa", Open sans;
  font-size: 46px;
  margin-bottom: 5px;
`;
const Form = styled.form`
  width: 82%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  color: gray;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 20px;
  padding-left: 15px;
  display: flex;
`;
const DivGenNasc = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SpanGen = styled.span`
  width: 40%;
  color: gray;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 20px;
  display: flex;
  flex-wrap:wrap;
  padding: 10px 10px 10px 15px;
`;
const Select = styled.select`
  background: transparent;
  border: none;
  border-radius: 2px;
  padding-left: 10px;
  margin-left: 2px;
  outline: 0;
`;

const SpanNasc = styled.span`
  width: 60%;
  color: gray;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 18px;
  margin-left: 10px;
  display: flex;
  padding: 10px 10px 10px 15px;
  flex-wrap:wrap;
`;

const InputNascimento = styled.input`
  margin-left: 5px;
  border: none;
  outline: 0;
`;

const DivCpfTel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const InputMedium = styled.input`
  width: 46%;
  height: 40px;
  color: gray;
  margin: 5px 0 5px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 22px;
  padding-left: 15px;
  display: flex;
  .cpf {
    margin-right: 10px;
  }
`;

const InputPlayEntrar = styled.input`
  width: 225px;
  height: 55px;
  background: #0080ff;
  border-radius: 10px;
  outline: 0;
  color: #ffffff;
  font-size: 26px;
  margin: 5px 0 5px 0;
`;

export default PopupCadastrar;
