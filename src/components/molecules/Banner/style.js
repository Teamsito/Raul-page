import styled from "styled-components";
import { theme, viewport } from "../../../theme";
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
`;
export const Information = styled.h1`
  color: #d9d6d6;
  text-shadow: 1px 4px 6px black;
  max-width: 56ch;
  font-size: 26px;
  text-align: center;
  @media (max-width: ${viewport.large}) {
    flex: 0;
    font-size: 22px;
    margin-top: 12px;
  }
`;
export const ImgLogo = styled.img`
height: 50%;
width: 35%;
  @media (max-width: ${viewport.large}) {
    flex: 0;
    width: 65%;
    height: 60%;
  }

`;
