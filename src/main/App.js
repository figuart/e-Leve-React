import React from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom'
import '../App.css';
import '.././index.css'
import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Route";


WebFont.load({
  google: {
    families: ['Comfortaa']
  }
});


function App() {
  return (
    <BrowserRouter>
      <Body>
        <Header/>
            <Routes/>
        <Footer/>
      </Body>
    </BrowserRouter>
  );
}

export default App;

const Body = styled.div `
  background-color:#62E78F;
  text-align:center;
  font-family: 'Comfortaa', 'Open sans';
`