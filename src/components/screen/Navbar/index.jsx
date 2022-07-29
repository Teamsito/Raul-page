import React from "react";
import { useState } from "react";
import Image from "../../../assets/img/Logo.png";
import {
  Navbar,
  Brand,
  ImgStyle,
  ListNav,
  UlStyle,
  LiStyle,
  DivButton,
  InfoButton,
  DivMenu
} from "./style";

function index() {
  const [vista, setVista] = useState(false);

  return (
    <Navbar>
      <Brand>
        <ImgStyle src={Image} alt="" />
      </Brand>
      <ListNav>
        <UlStyle>
          <LiStyle>INICIO</LiStyle>
          <LiStyle>NOSOTROS</LiStyle>
          <LiStyle>SERVICIOS</LiStyle>
          <LiStyle>CONTACTANOS</LiStyle>
        </UlStyle>
      </ListNav>
      <DivButton>
        <InfoButton onClick={() => setVista((vista) => !vista)}> ☰ </InfoButton>
        {vista ? (
          <DivMenu>
            <UlStyle>
              <LiStyle>INICIO</LiStyle>
              <LiStyle>NOSOTROS</LiStyle>
              <LiStyle>SERVICIOS</LiStyle>
              <LiStyle>CONTACTANOS</LiStyle>
            </UlStyle>
          </DivMenu>
        ) : null}
      </DivButton>
    </Navbar>
  );
}

export default index;
