import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const PopupEsqueciSenha = () => (
  <Popup className="modal-body"
    trigger={
      <LinkEsqueciSenha to="#esqueci-senha">
        Esqueci minha senha
      </LinkEsqueciSenha>
    }
    modal
    closeOnDocumentClick
  >
    <section>
      <Title className="modal-title">Esqueci minha senha</Title>
      <span>Digite seu email, para receber o código de recuperação:</span>
      <form>
        <Input type="email" name="login" placeholder="Email" required />
        <InputPlayEntrar type="submit" name="play" value="Enviar" />
      </form>
    </section>
  </Popup>
);
export default PopupEsqueciSenha;

/*================================= Styles ===================================*/
const LinkEsqueciSenha = styled(Link)`
  color: #000000;
  font-size: 18px;
  outline: 0;
`;
const Title = styled.h1`
  font-family: "Comfortaa", Open sans;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 80%;
  height: 45px;
  color: gray;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  border: 1px solid #000000;
  outline: 0;
  font-size: 30px;
  padding-left: 15px;
`;
const InputPlayEntrar = styled.input`
  width: 50%;
  height: 55px;
  background: #0080ff;
  border-radius: 10px;
  outline: 0;
  color: #ffffff;
  font-size: 26px;
  margin: 10px 0 10px 0;
`;
