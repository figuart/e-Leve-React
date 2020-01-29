import React from "react";
import styled from "styled-components";
import BlogPost from "./BlogPost"

export default function Blog() {
  return (
    <div>
      <div className="container">
      <div className="container">
    <div className=" col-md-12">
    <TitleBlog className="row">
            <span id="blogblog">blog</span>
            <h1 id="limpae">Limpaê!</h1>
        </TitleBlog>
    <BlogPost/>
    <BlogPost/>


    <Button type="button" id="blog-button">Fique por dentro!</Button>
    </div>
    </div>
      </div>
    </div>
  );
}


const TitleBlog = styled.div`
    padding-bottom: 1%;
    justify-content: center;
    margin-top:2%;

`
const Button = styled.button`
border: 1px solid #000;
border-radius: 14px;
padding: 5px 19px;
`