import React from "react";
import Logo from "../../../assets/img/LogoMain.png";
import { MainBanner, ImgLogo, Information } from "./style";

const Index = () => {
  return (
    <>
      <MainBanner>
        <Information>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          quasi perspiciatis ipsam veniam officiis autem earum error? Hic,
          dignissimos autem. Incidunt praesentium sint eaque quasi sunt numquam
          illum saepe vel!
        </Information>
        <ImgLogo src={Logo} alt="ADMINISTRACION RJ" />
      </MainBanner>
    </>
  );
};

export default Index;
