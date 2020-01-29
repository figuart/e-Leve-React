import React from "react";
import styled from "styled-components";
import LogoBranca from "../img/logo-branco.png"

function Footer(){
    return(
        <div>
            <Rodape className="container-fluid">
                <div className="row col-12 p-5">
                    <div className="col-md-3 row justify-content-center">
                        <img  className="mb-4" src={LogoBranca} alt="Logo e-leve"/>
                        <p>Queremos reeducar o mundo para que ele se torne um lugar conectado, sustentável e inclusivo.</p>
                    </div>
                    <div className="col-md-3 justify-content-center">
                        <h2>INSTITUCIONAL</h2>
                        <ul>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="sobre.html">Sobre</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="equipe.html">Equipe e-Leve</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="missao.html">Missão e Valores</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="trabalhe-conosco.html">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 justify-content-center">
                    <h2>CONTEUDOS</h2>
                        <ul>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="sobre.html">Sobre</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="equipe.html">Equipe e-Leve</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="missao.html">Missão e Valores</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="trabalhe-conosco.html">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 justify-content-center">
                    <h2>SIGA-NOS</h2>
                        <ul>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="sobre.html">Sobre</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="equipe.html">Equipe e-Leve</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="missao.html">Missão e Valores</Link></li>
                            <li className="text-left"><Link className="text-decoration-none text-reset" href="trabalhe-conosco.html">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>
                </div>
                
            </Rodape>
            <div className="container-fluid m-0 p-0">
                    <p  className="col-12 m-0 p-4" id="copyright">© Copyright 2019 e-Leve | Todos os Direitos Reservados</p>
            </div>
        </div>
    )
}

export default Footer;

const Rodape = styled.div `
background-color: #343538;
color: #FFFFFF;
`

const Link = styled.a `
    color: #FFFFFF;
    text-decoration-color:none;
    text-decoration-style:none;
`