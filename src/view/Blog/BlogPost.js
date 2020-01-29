import React from "react";
import styled from "styled-components";
import ImagePostBlog from "../../img/post-blog.png"




export default function Blog() {
  return (

    <IntroBlog id="Intro">        
            <div className="row justify-content-sm-center rounded">
            <div className="col-sm-6 col-md-4">
            <div className="card mb-2">
                <img className="card-img-top" src={ImagePostBlog} alt="imagem de postagem"/>
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
            <div className="card mb-2">
                <img className="card-img-top" src={ImagePostBlog} alt="imagem de postagem"/>
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
            <div className="card mb-2">
                <img className="card-img-top" src={ImagePostBlog} alt="imagem de postagem"/>
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
    </IntroBlog>
  );
}

const IntroBlog = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;`
