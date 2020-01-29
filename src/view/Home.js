import React from "react";
import styled from "styled-components";
import Slide1 from "../img/slide1.png";
import Slide2 from "../img/slide2.png";
import Slide3 from "../img/slide3.png";
import Mobile from "../img/modelo-mobile.png";
import PostBlog from "../img/post-blog.png"
import Parceiros from "../img/parceiros.png"
import Apoiadores from "../img/apoiadores.png"

export default function Home() {
  return (
    <div>
        <Container className="container">
        <Intro>
            <Texto>
            
                <H1 className="row">Aqui, ser responsável ambiental é divertido e pode gerar recompensas!</H1>
                <Span>Somos uma startup de sustentabilidade que tem como produto principal o aplicativo e-Leve Game.
                    Nele, é
                    possível concorrer a prêmios com a coleta de lixo eletrônico. Saiba mais e não fique de fora!</Span>
                    <p>
                    <Button type="button">Fique por dentro!</Button>
                    </p>
                </Texto>
            

            <Smartphone>
                <img className="ml-auto img-fluid d-block" src={Mobile} alt=""/>
            </Smartphone>

            

        </Intro>

    </Container>
    <Tutorial className="container-fluid">
    <h1>Como funciona o e-Leve Game?</h1>

<Carousel id="carouselSite" className=" container carousel slide" data-ride="carousel">

<ol className="carousel-indicators">
  <li data-target="#carouselSite" data-slide-to="0" className="active"></li>
  <li data-target="#carouselSite" data-slide-to="1"></li>
  <li data-target="#carouselSite" data-slide-to="2"></li>

</ol>

  <div className="carousel-inner" id="justifyCarousel">
      <div className="carousel-item active">
        <img src={Slide1} className="img-fluid d-block rounded-0" alt="image1"/>
          <div className="carousel-caption d-none d-md-block text-light">
            <h1>Título</h1>
            <p>descrição</p>
          </div>
      </div>
      <div className="carousel-item">
        <img src={Slide2} className="img-fluid d-block rounded" alt="image1"/>
        <div className="carousel-caption d-none d-md-block">

        </div>
      </div>
      <div className="carousel-item">
        <img src={Slide3} className="img-fluid d-block rounded" alt="image1"/>
        <div className="carousel-caption d-none d-md-block text-light">

        </div>
      </div>

    </div>
    <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
      <span className="sr-only">Anterior</span>
    </a>
    <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
      <span className="carousel-control-next-icon"></span>
      <span className="sr-only">Próximo</span>
    </a>
</Carousel>
</Tutorial>
    <div className="container">
    <div className=" col-md-12">
    <IntroBlog id="Intro">
        <TitleBlog className="row">
            <span id="blogblog">blog</span>
            <h1 id="limpae">Limpaê!</h1>
        </TitleBlog>
        
            <div className="row justify-content-sm-center rounded">
            <div className="col-sm-6 col-md-4">
            <div className="card mb-5">
                <img className="card-img-top" src={PostBlog} alt="imagem de postagem"/>
                <div className="card-body">
                    <h4 className="card-title">Aplicativo facilita a coleta de lixo eletrônico no Rio de Janeiro</h4>
                    <p className="card-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
                    industry's stan....</p>
                </div>

                <div className="card-body">
                    <a href="https://avozdacidade.com/wp/volta-redonda-vai-promover-mais-uma-edicao-do-descarte-solidario-de-lixo-eletronico/" className="card-link">Leia Mais</a>
                </div>
            </div>
        </div>
            <div className="col-sm-6 col-md-4">
            <div className="card mb-5">
                <img className="card-img-top" src={PostBlog} alt="imagem de postagem"/>
                <div className="card-body">
                    <h4 className="card-title">Aplicativo facilita a coleta de lixo eletrônico no Rio de Janeiro</h4>
                    <p className="card-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
                    industry's stan....</p>
                </div>

                <div className="card-body">
                    <a href="https://avozdacidade.com/wp/volta-redonda-vai-promover-mais-uma-edicao-do-descarte-solidario-de-lixo-eletronico/" className="card-link">Leia Mais</a>
                </div>
            </div>
        </div>
        <div className="col-sm-6 col-md-4">
            <div className="card mb-5">
                <img className="card-img-top" src={PostBlog} alt="imagem de postagem"/>
                <div className="card-body">
                    <h4 className="card-title">Aplicativo facilita a coleta de lixo eletrônico no Rio de Janeiro</h4>
                    <p className="card-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the
                    industry's stan....</p>
                </div>

                <div className="card-body">
                    <a href="https://avozdacidade.com/wp/volta-redonda-vai-promover-mais-uma-edicao-do-descarte-solidario-de-lixo-eletronico/" className="card-link">Leia Mais</a>
                </div>
            </div>
        </div>
        </div>
        
        <Button type="button" id="blog-button">Fique por dentro!</Button>
    </IntroBlog>
    </div>
    </div>
    <Partners className="container-fluid">
        <div className="row col-12 text-center">
        <h1 className="col-12 text-center">Parceiros</h1>
        <img src={Parceiros} alt="Nossos Parceiros" className="col-12 text-center parceiros-logo"/>
        <h3 className="col-12 text-center">Apoio</h3>
        <img className="col-12 text-center" src={Apoiadores} alt=""/>
        </div>
    </Partners>

    <Form>
        <h1><strong>Seja parceiro(a) e e-Leve-se!</strong></h1>
        <p className= "col-12 text-center" >Se você é uma empresa de sustentabilidade, ou que possui um setor de responsabilidade socioambiental, ponto
            de coleta de lixo e Órgão público interessado, nós temos uma grande oportunidade para trabalharmos juntos!
        </p>
        <Button className="botao-parceria-sobre">Quero ser parceiro(a)</Button>
    </Form>
    </div>
  );
}

const div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: yellow;
  background-color:#62E78F
`;
const Intro = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0%;
    position: relative;
    padding: 0px 10px;
    justify-content: space-between;   
`
const Texto = styled.div `
    width: 60%;
    padding-left: 15%;`
    
const Container = styled.div `
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`
const H1 = styled.h1 `
    font-size: 44px;
    padding-bottom: 10px;
    text-align:left;
    `
const Smartphone = styled.div`
`

const Span = styled.div `
    color: #ffffff;
    font-size: 19px;
    padding-bottom: 10px;
    text-align:left;
`

const Button = styled.button`
border: 1px solid #000;
border-radius: 14px;
padding: 5px 19px;
`
const Tutorial = styled.div`
width:100%;
background-color:#FFFFFF;
justify-content:center;
box-shadow: 0 6px 6px #4646 ;
padding: 30px;
`


const Carousel = styled.div`
    width: 80%;
    margin: 12px 0 30px 0;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    padding-bottom: 6%;
    z-index: 1;
`  
const IntroBlog = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;`

const TitleBlog = styled.div`
    padding-bottom: 15px;
`

const Partners = styled.div`
    width:100%;
    background: #fff;
    padding: 6%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`
const Form = styled.form`
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 20px 100px;
    justify-content:center;
`