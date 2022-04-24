import React from "react";
import impress from '../images/impressLogo.png';
import umn from '../images/umnLogo.jpg';

const Title = () => {
  return (
      <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img src= {impress} alt="[IMPRESS LOGO HERE]" width="100" height="100" ></img>
        SSRL Commnad Deck GUI 
        <img src= {umn} alt="[UMN LOGO HERE]" width="100" height="100" ></img>
      </h1>
  );
};

export default Title;
