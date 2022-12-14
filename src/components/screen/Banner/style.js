import styled from "styled-components";
import { theme, viewport, fonts } from "../../../assets/css/theme";
import BannerImg from "../../../assets/img/banner.png";

export const MainBanner = styled.main`
  background: url(${BannerImg}) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10%;
  @media (max-width: ${viewport.large}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${viewport.xsmall}) {
    height: 85vh;
  }
`;
export const Information = styled.h1`
  color: ${theme.primary};
  text-shadow: 1px 4px 6px black;
  max-width: 56ch;
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.large}) {
    flex: 0;
    font-size: 22px;
    margin-top: 12px;
  }
  @media (max-width: ${viewport.small}) {
    font-size: 18px;
    margin-top: 12px;
  }
  @media (max-width: ${viewport.xsmall}) {
    font-size: 16px;
    margin-top: 20px;
  }
`;
export const ImgLogo = styled.img`
  height: 50%;
  width: 30%;
  @media (max-width: ${viewport.large}) {
    flex: 0;
    width: 65%;
    height: 60%;
  }
  @media (max-width: ${viewport.xsmall}) {
    width: 85%;
  }
`;
