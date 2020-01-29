import React from "react";
import Logo from "../../src/img/logo-colorido.png";
import styled from "styled-components";
import Link from "../MENU/style-Menu";

function Top(){
    return(

        <NavBar className="navbar navbar-expand-lg navbar-light">
        <Shadow className="container-fluid mt-3 mb-3 pb-2">
        <a className="navbar-brand mb-0 ml-2" href="./"><IMG src={Logo} alt="logotipo da e-Leve"/></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSite">
        <div className="container d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/Sobre">SOBRE</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Blog">BLOG</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Jogar">JOGAR</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Parceiros">PARCEIROS</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to="/Contato">CONTATO</Link>
            </li>
          </ul>
        </div>
        </div>
        </Shadow>
    </NavBar>

    
    )
}
 export default Top;

const IMG = styled.img `
    margin-left: 36px;
    alt:Logotipo da e-Leve;
    `;

const NavBar = styled.nav `
    background-color:#FFFFFF;
`
const Shadow = styled.div `

`