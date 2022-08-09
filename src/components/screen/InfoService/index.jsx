import React from "react";
import { Title } from "../../atoms/Title Secundary/style";
import { DivStyle, SectionStyle } from "./style";
import Section from "../../molecules/Section";
import listInfoAbout from '../../../../services/listInfoAbout'
function index() {

  return (
    <>
      <Title> Por que confiar en Nosotros </Title>
      <DivStyle>
        <SectionStyle>
          <Section
            listItem={listInfoAbout}
          />
        </SectionStyle>
      </DivStyle>
    </>
  );
}

export default index;
