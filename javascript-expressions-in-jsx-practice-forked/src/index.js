//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import Reactdom from "react-dom";

const YOURNAME = "Kim Seng Thai";
const CURRENTYEAR = new Date().getFullYear();

Reactdom.render(
  <>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </>,
  document.getElementById("root")
);
