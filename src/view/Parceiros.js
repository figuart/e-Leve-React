import React from "react";
import styled from "styled-components";
import Firjan from "../img/firjan.png"
import Prefeitura from "../img/prefeitura.png";
import Uber from "../img/uber.png";
import Greenpeace from "../img/greeenpeace.png";
import TIRio from "../img/TIRio.png";
import WWf from "../img/wwf.png";
import ONUBr from "../img/OnuBR.png";
import Sebrae from "../img/sebrae.png";
import FabricaVerde from "../img/fabricaVerde.png";

export default function Parceiros() {
  return (
    <div className="conatiner-fluid">
        <Parceria>
        <h1 className="mb-5 mt-2">Parceiros</h1>

        <section className="col-12 text-center">
            <img className="img-fluid" src={Prefeitura} alt="Logo prefeitura do Rio"/>
            <img className="img-fluid" src={Firjan} alt="Logo FIRJAN"/>
            <img className="img-fluid" src={Uber} alt="Logo UBER"/>
        </section>

        <h1 className="m-5" id="RedeApoio">Rede de Apoio</h1>

        <nav>
            <div className="col-12 text-center">
              <img className="img-fluid" src={Greenpeace} alt="Logo Greenpeace"/>
              <img className="img-fluid" src={TIRio} alt="Logo TiRio"/>
              <img className="img-fluid" src={WWf} alt="Logo da WWF" />
            </div>
            <div className="col-12 text-center">
              <img className="img-fluid" src={ONUBr} alt=" Logo Onu do Brasil"/>
              <img className="img-fluid" src={Sebrae} alt="Logo do Sebrae"/>
              <img className="img-fluid" src={FabricaVerde} alt="Logo Fábrica Verde"/>
            </div>
        </nav>
    </Parceria>
    <section className="m-5">
        <h3>Inclusão digital</h3>
        <p className="d-flex col-12 m-x-5 text-center justify-content-center">A e-Leve tem um compromisso firmado com a inclusão digital. Dessa forma,
            consideramos, além da parceria B2B, a parceria individual onde o parceiro(a) doa computadores, celulares e
            tablets - novos e usados - para pessoas de baixa renda. Se você é uma empresa de sustentabilidade, ou que
            possui um setor de responsabilidade socioambiental, ponto de coleta de lixo e Órgão público interessado, nós
            temos uma grande oportunidade para trabalharmos juntos!</p>


        <Button className="btn btn-light rounded">Quero ser parceiro(a) B2B</Button><br/>

        <Button className="btn btn-light rounded m-0">Quero contribuir</Button>

    </section>
    </div>
  );
}

const Parceria = styled.section `
  align-items: center;
  background-color:#ffffff;
  padding-top:80px;
`
const Button = styled.button `
	font-family: 'Comfortaa', cursive;
  justify-content:center;
	min-width: 300px;
	font-size: 20px;
	margin: 25px auto;
	padding: 6px;
	display: flex;
`