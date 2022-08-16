import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

export const Card = styled.div`
  position: relative;
  background: ${theme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299.82px;
  height: 400px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (max-width: ${viewport.medium}) {
    width: 200px;
    height: 300px;
  }
  @media (max-width: ${viewport.small}) {
    width: 140px;
    height: 190px;
  }
  @media (max-width: ${viewport.xsmall}) {
    width: 100px;
    height: 130px;
  }
`;

export const Image = styled.img`
  width: 80%;
`;

export const Subtitle = styled.h3`
  position: absolute;
  top: -25px;
  color: ${theme.secundary};
  font-size: 22px;
  font-family: ${fonts.fontTitle};
  @media (max-width: ${viewport.xsmall,viewport.small}) {
    font-size: 16px;
    font-family: ${fonts.fontTitle};
  }
  @media (max-width: ${viewport.xsmall}) {
    font-size: 14px;
  }
`;
