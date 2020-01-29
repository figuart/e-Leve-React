import React from "react";
import styled from "styled-components";

import CRD from "../img/CRD.png";

import Aline from "../img/Aline.png";
import Ana from "../img/Ana.png";
import Antônia from "../img/Antonia.png";
import Arthur from "../img/Arthur.png";
import Diego from "../img/Diego.png";
import Gabriel from "../img/Gabriel.png";

import Usuarios from "../img/Usuarios.png";
import Coletas from "../img/coletas.png";
import Categorias from "../img/categorias.png";

function Sobre() {
  return (
    <section>
      <SectionSobreEmpresa>
        <Title>Quem somos</Title>
        <TextQuemSomos>
          Somos uma startup de sustentabilidade que tem como produto principal o
          aplicativo e-Leve Game. Nele, é possível concorrer a prêmios com a
          coleta de lixo eletrônico. Saiba mais e não fique de fora!
        </TextQuemSomos>
        <LinhaQuemSomos />
        <Title>Missão</Title>
        <TextMissao>
          Reeducar o mundo para que ele se torne um lugar conectado e
          sustentável.
        </TextMissao>
        <LinhaMissao />
        <SectionValores>
          <SectionTextoValores>
            <Title>Valores</Title>
            <TextValores>
              Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </TextValores>
          </SectionTextoValores>
          <img src={CRD} alt="Coleta, Recicla, Distribui" />
        </SectionValores>
        <LinhaValores />
      </SectionSobreEmpresa>
      <TitleColaboradores>Nossos Colaboradores</TitleColaboradores>
      <SectionColaboradores>
        <SectionColabLegendas>
          <Coleb src={Aline} alt="Aline Santos" />
          <Nome>Aline Santos</Nome>
          <Legenda>Dev Front-end</Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas>
          <Coleb src={Ana} alt="Ana Beatriz Thomaz" />
          <Nome>Ana Beatriz Thomaz</Nome>
          <Legenda>
            Game Design and Dev
            <br />
            Back-end
          </Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas>
          <Coleb src={Antônia} alt="Antonia L. Pires" />
          <Nome>Antonia L. Pires</Nome>
          <Legenda>
            Design and Dev <br />
            Fullstack
          </Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas>
          <Coleb src={Arthur} alt="Arthur Figueira" />
          <Nome>Arthur Figueira</Nome>
          <Legenda>
            Dev Fullstack and <br />
            Business Inteligence
          </Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas>
          <Coleb src={Diego} alt="Diego Leandro" />
          <Nome>Diego Leandro</Nome>
          <Legenda>Dev Front-end</Legenda>
        </SectionColabLegendas>
        <SectionColabLegendas>
          <Coleb src={Gabriel} alt="Gabriel Mazala" />
          <Nome>Gabriel Mazala</Nome>
          <Legenda>
            Game Design and Dev
            <br />
            Back-end
          </Legenda>
        </SectionColabLegendas>
      </SectionColaboradores>

      <SectionNumeros>
        <TitleNumeros>Nossos números</TitleNumeros>
        <SectionGraficos>
          <img src={Usuarios} alt="Grafico de usuarios por ano" />
          <SectionTextGraficos>
            <SubtitleNumeros>Usuários/Ano</SubtitleNumeros>
            <TextNumeros>
              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
        </SectionGraficos>
        <SectionGraficos>
          <SectionTextGraficos>
            <SubtitleNumeros>Coletas/Ano</SubtitleNumeros>
            <TextNumeros>
              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
          <ImgColetas src={Coletas} alt="Grafico de coletas por ano" />
        </SectionGraficos>
        <SectionGraficos>
          <SectionTextGraficos>
            <SubtitleNumeros>
              Categorias <br /> coletadas
            </SubtitleNumeros>
            <TextNumeros>
              Somos uma startup de sustentabilidade que tem como produto
              principal o aplicativo e-Leve Game. Nele, é possível concorrer a
              prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de
              fora!
            </TextNumeros>
          </SectionTextGraficos>
          <img src={Categorias} alt="Grafico de categorias coletadas" />
        </SectionGraficos>
      </SectionNumeros>

      <SectionParceiria>
        <TitleParceria>
          Seja parceiro(a) e <b>e-Leve-se!</b>
        </TitleParceria>
        <TextParceria>
          Se você é uma empresa de sustentabilidade, ou que possui um setor de
          responsabilidade socioambiental, ponto de coleta de lixo e Órgão
          público interessado, nós temos uma grande oportunidade para
          trabalharmos juntos!
        </TextParceria>
        <InputParceria type="button" value="Quero ser parceiro(a)" />
      </SectionParceiria>
    </section>
  );
}

export default Sobre;

const SectionSobreEmpresa = styled.section`
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
  margin: 50px 21% 5% 50px;
`;

const LinhaQuemSomos = styled.hr`
  width: 97%;
  border: 2px solid #62e78f;
`;
const LinhaMissao = styled.hr`
  width: 60%;
  border: 2px solid #62e78f;
`;
const LinhaValores = styled.hr`
  width: 40%;
  border: 2px solid #62e78f;
  margin-bottom: 100px;
`;
const SectionValores = styled.section`
  display: flex;
  width: 100%;
`;
const SectionTextoValores = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin: 20px 50px 0 50px;
  max-height: 50px;
  font-size: 43px;
`;
const SectionColaboradores = styled.section`
  background: #62e78f;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const TitleColaboradores = styled.h1`
  justify-content: center;
  color: #ffffff;
  margin: 30px 0;
  font-size: 48px;
  display: flex;
`;

const SectionColabLegendas = styled.section`
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

const SectionNumeros = styled.section`
  background: #ffffffff;
`;

const TitleNumeros = styled.h1`
  justify-content: center;
  color: #000000;
  padding: 60px 0;
  font-size: 48px;
  display: flex;
`;
const SectionTextGraficos = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 40%;
  height: 50%;
  padding-top: 10%;
`;
const SectionGraficos = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 50px;
`;

const SubtitleNumeros = styled.h1`
  font-size: 43px;
  color: #0080ff;
  font-weight: bold;
  margin-left: 50px;
`;
const TextNumeros = styled.p`
  padding-top: 15px;
  font-size: 25px;
  color: #565050;
  margin-left: 50px;
`;

const ImgColetas = styled.img`
  padding-right: 43px;
`;

const SectionParceiria = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 50px;
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
  width: 30%;
  height: 81px;
  margin: 0 auto 100px;
  background: #ffffff;
  color: #565050;
  border-radius: 14px;
  font-size: 30px;
  outline: 0;
`;
