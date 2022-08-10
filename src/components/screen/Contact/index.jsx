import React from "react";
import { Title } from "../../atoms/Title/style";
import { DivStyle } from "./style";
import Contact from "../../molecules/ContactSection";

function index() {
  return (
    <>
      <Title>Contacta con Nosotros</Title>
      <DivStyle>
        <Contact
          textImg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            suscipit quisquam tempora quibusdam quidem. Magni adipisci delectus
            labore, dignissimos rerum animi dolor, iste excepturi ullam
            temporibus aspernatur, unde praesentium? Dignissimos."
          buttonWp="Contactanos Via WhatsApp"
          buttonEmail="Contactanos Via E-mail"
          buttonFb="Entra en Nuesta red de Facebook"
        ></Contact>
      </DivStyle>
    </>
  );
}

export default index;
