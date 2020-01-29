import React from "react";
import styled from "styled-components";


export default function Contato() {
  return (
    <div className="container-fluid">
        <section className="container text-center">
           
           <ContatoAsk className="d-flex flex-wrap justify-content-center pt-5">
               <div className="container-fluid col-12 justify-content-center"><h1> Como podemos te ajudar?</h1></div>
               <div className="container-fluid col-12 justify-content-center">Preencha o formulário para que possamos entrar em contato com você!</div>
           </ContatoAsk>
           <Form className="form-group col-12 justify-content-center" action="mailto:e-leve.tecnologia@yandex.com">
                <Nome type="text" className="col-md-6 col-sm-6" name="nome" placeholder="Nome Completo" id="name"/> 
                <TelMail className="m-0 col-12 justify-content-between">
                    <Tel type="text" className="col-md-3 col-sm-6"  name="tefone" placeholder="Telefone (21)12345-6666" id="phone"/>

                    <Email type="text" className="col-md-3 col-sm-6"  name="email" placeholder="E-mail" id="mail"/>
                </TelMail>
                <Mensagem type="text" className="col-12 col-sm-6" name="mensagem" placeholder="Mensagem" id="messenger"></Mensagem> 

                <div className="col-12 button btn">
                    <Enviar type="submit">ENVIAR</Enviar>
                </div>
       
            </Form>


   </section>
    </div>
  );
}

const ContatoAsk = styled.div `
    font-style: normal;
    font-size: 20px;

    h1{
        color:#ffffff;
    }
` 

const Form = styled.form `
`
const Nome = styled.input `
    width:10%;
`
const Mensagem = styled.textarea `
    height: 300px;
`
const Email = styled.input `   

`
const Tel = styled.input `


`
const TelMail = styled.div `
`
const Enviar = styled.button`
  width: 225px;
  height: 55px;
  background: #0080ff;
  border-radius: 10px;
  outline: 0;
  color: #ffffff;
  font-size: 26px;
  margin: 10px 0 10px 0;
`;
