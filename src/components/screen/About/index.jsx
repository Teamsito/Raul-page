import React from "react";
import {
  SectionStyle,
  DivImg,
  ImgStyle,
  DivText,
  TittleStyle,
  TextStyle,
} from "./style";
import About from "../../../assets/img/Nosotros.png";
import Title from "../../atoms/Title";
/* import Title from "../../assets/img/titulo nosotros.svg" */

function index() {
  return (
    <>
      <Title>About</Title>
      <SectionStyle>
        <DivImg>
          <ImgStyle src={About} alt="" />
        </DivImg>
        <DivText>
          <TittleStyle>About</TittleStyle>
          <TextStyle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            suscipit quisquam tempora quibusdam quidem. Magni adipisci delectus
            labore, dignissimos rerum animi dolor, iste excepturi ullam
            temporibus aspernatur, unde praesentium? Dignissimos. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Nobis similique natus
            est cupiditate amet veritatis sed, reprehenderit officiis ex libero?
            Sequi eaque, odio dolore illo et dicta corporis blanditiis harum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            placeat aliquid dolorum voluptatum perferendis ducimus expedita
            aspernatur voluptate, nulla, blanditiis, animi esse sunt
            exercitationem vel laboriosam quam corrupti distinctio? Culpa.
          </TextStyle>
        </DivText>
      </SectionStyle>
    </>
  );
}

export default index;
