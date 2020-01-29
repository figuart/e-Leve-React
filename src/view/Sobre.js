import React from "react";
import styled from "styled-components";

import CRD from "../img/valores-ELEve1.png";

import Aline from "../img/1-Aline.png";
import Ana from "../img/2-Ana.png";
import Antônia from "../img/3-Antonia.png";
import Arthur from "../img/4-Arthur.png";
import Diego from "../img/5-Diego.png";
import Gabriel from "../img/6-Gabriel.png";

import Usuarios from "../img/grafico-ELEve.png";
import Coletas from "../img/coleta-parceiros.png";
import Categorias from "../img/parceiros-grafico.png";

function Sobre() {
  return (
    <SobreContainer className="container-fluid p-0 m-0">
    <div className="justify-content-sm-center">
      <SectionSobreEmpresa>
        <Title className="text-left  mt-0 mx-5 mb-5">Quem somos</Title>
        <TextQuemSomos className="m5">
          Somos uma startup de sustentabilidade que tem como produto principal o
          aplicativo e-Leve Game. Nele, é possível concorrer a prêmios com a
          coleta de lixo eletrônico. Saiba mais e não fique de fora!
        </TextQuemSomos>
        <LinhaQuemSomos />
        <Title className="text-left mt-0 mx-5">Missão</Title>
        <TextMissao>
          Reeducar o mundo para que ele se torne um lugar conectado e
          sustentável.
        </TextMissao>
        <LinhaMissao className="text-left mt-0 mx-5"/>
        <SectionValores className="col-12 text-center d-flex flex-wrap">
          <SectionTextoValores className="col-sm-6 col-md-8 d-flex flex-wrap justify-content-between">
            <Title className="ml-3">Valores</Title>
            <TextValores className="ml-4">
              Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </TextValores>
            <LinhaValores className="text-left mt-0 mx-5 ml-0"/>

          </SectionTextoValores>
          <img className="col-sm-6 col-md-4 img-fluid" src={CRD} alt="Coleta, Recicla, Distribui" />

        </SectionValores>
      </SectionSobreEmpresa>
      <TitleColaboradores>Nossos Colaboradores</TitleColaboradores>
      <SectionColaboradores className=" container-fluid col-12 justify-content-center">
      <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Aline} alt="Aline Santos" />
          <Nome>Aline Santos</Nome>
          <Legenda>Dev Front-end</Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Ana} alt="Ana Beatriz Thomaz" />
          <Nome>Ana Beatriz Thomaz</Nome>
          <Legenda>
            Game Design and Dev
            <br />
            Back-end
          </Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Antônia} alt="Antonia L. Pires" />
          <Nome>Antonia L. Pires</Nome>
          <Legenda>
            Design and Dev <br />
            FullStack
          </Legenda>
        </SectionColabLegendas>
        </SectionColaboradores>
        <SectionColaboradores className="col-12 text-center">
        <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Arthur} alt="Arthur Figueira" />
          <Nome>Arthur Figueira</Nome>
          <Legenda>
            Dev FullStack and <br />
            Business Inteligence
          </Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Diego} alt="Diego Leandro" />
          <Nome>Diego Leandro</Nome>
          <Legenda>Dev Front-end</Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas className="card bg-transparent border-0">
          <Coleb className="card-img-top" src={Gabriel} alt="Gabriel Mazala" />
          <Nome>Gabriel Mazala</Nome>
          <Legenda>
            Dev FullStack
          </Legenda>
        </SectionColabLegendas>
      </SectionColaboradores>

      <SectionNumeros className="container-fluid">
      <TitleNumeros>Nossos números</TitleNumeros>

      <div className="row col-md-12">

        <SectionGraficos className="col-md-11 col-sm-12 text-center d-flex flex-wrap">
          <img className="col-sm-5 img-fluid d-flex flex-wrap" src={Usuarios} alt="Grafico de usuarios por ano" />
          <SectionTextGraficos className="col-sm-6 d-flex flex-wrap justify-content-between">
          <SubtitleNumeros className="col-sm-3 col-md-8">Usuários/Ano</SubtitleNumeros>

            <TextNumeros className="text-justify">
              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
        </SectionGraficos>

        <SectionGraficos className="col-md-11 col-sm-6 text-center d-flex flex-wrap">
            <SectionTextGraficos className="col-sm-6 container d-flex flex-wrap justify-content-between">
            
            <TextNumeros className="mt-5 text-justify">
            <SubtitleNumeros className="col-sm-3 m-0 col-md-8">Coletas/Ano</SubtitleNumeros>

              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
          <ImgColetas className="col-sm-3 col-md-4 img-fluid d-flex flex-wrap" src={Coletas} alt="Grafico de coletas por ano" />
        </SectionGraficos>
        
            <SectionGraficos className="col-md-11 col-sm-6 text-center d-flex flex-wrap">
            <SectionTextGraficos className="col-sm-6 container d-flex flex-wrap justify-content-between">
            
            <TextNumeros className="mt-5 text-justify">
            <SubtitleNumeros className="col-sm-3 col-md-8">
              Categorias coletadas
            </SubtitleNumeros>
              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
          <ImgColetas className="col-sm-5 img-fluid d-flex flex-wrap" src={Categorias} alt="Grafico de categorias coletadas" />

        </SectionGraficos>
        </div>
      </SectionNumeros>

      <SectionParceiria>
        <TitleParceria className="text-center">
          Seja parceiro(a) e <b>e-Leve-se!</b>
        </TitleParceria>
        <TextParceria>
          Se você é uma empresa de sustentabilidade, ou que possui um setor de
          responsabilidade socioambiental, ponto de coleta de lixo e Órgão
          público interessado, nós temos uma grande oportunidade para
          trabalharmos juntos!
        </TextParceria>
        <InputParceria className="img-fluid" type="button" value="Quero ser parceiro(a)" />
      </SectionParceiria>
      </div>
    </SobreContainer>
  );
}

export default Sobre;

const SobreContainer = styled.div `
text-justify:left;
width: 100%
`

const SectionSobreEmpresa = styled.div`
  background: #ffffff;
  padding: 50px;
`;

const TextQuemSomos = styled.p`
  font-size: 27px;
  margin: 40px 50px;
`;
const TextMissao = styled.p`
  font-size: 27px;
  margin: 40px 50px;
`;
const TextValores = styled.p`
  font-size: 27px;
`;

const LinhaQuemSomos = styled.hr`
  width: 97%;
  border: 2px solid #62e78f;
`;
const LinhaMissao = styled.hr`
  width: 60%;
  border: 2px solid #62e78f;
  align-self:left;
`;
const LinhaValores = styled.hr`
  width: 40%;
  border: 2px solid #62e78f;
  margin-bottom: 100px;
`;
const SectionValores = styled.div`
  display: flex;
  
`;
const SectionTextoValores = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  max-height: 50px;
  font-size: 43px;

`;
const SectionColaboradores = styled.div`
  background: #62e78f;
  padding: 30px;
  display: flex;
`;

const TitleColaboradores = styled.h1`
  justify-content: center;
  color: #ffffff;
  margin: 30px 0;
  font-size: 48px;
  display: flex;
`;

const SectionColabLegendas = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 33%;
`;
const Coleb = styled.img`
  max-width: 300px;
`;
const Nome = styled.span`
  font-size: 29px;
  color: #000000;
  font-weight: bold;
  padding: 10px 0 0 0;
`;

const Legenda = styled.span`
  font-size: 25px;
  color: #ffffff;
  padding: 10px 0 50px 0;
`;

const SectionNumeros = styled.div`
  background: #ffffffff;
`;

const TitleNumeros = styled.h1`
  justify-content: center;
  color: #000000;
  padding: 60px 0;
  font-size: 48px;
  display: flex;
`;
const SectionTextGraficos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 40%;
  height: 50%;
`;
const SectionGraficos = styled.div`
  display: flex;
  margin-bottom: 10%;
`;

const SubtitleNumeros = styled.h1`
  color: #0080ff;
  font-weight: bold;
  ;
`;
const TextNumeros = styled.p`
padding-top:0px;
  font-size: 25px;
  color: #565050;
  margin-left: 50px;
`;

const ImgColetas = styled.img`
`;

const SectionParceiria = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 20px 40px 0%;
  height:100%;
`;

const TitleParceria = styled.p`
  font-size: 34px;
  color: #000000;
  padding-bottom: 20px;
`;
const TextParceria = styled.p`
  font-size: 25px;
  padding-bottom: 20px;
  color: #000000;
`;

const InputParceria = styled.input`
  min-width: 30%;
  height: 81px;
  margin: 0 auto 100px;
  background: #ffffff;
  color: #565050;
  border-radius: 14px;
  font-size: auto;
  outline: 0;
`;
