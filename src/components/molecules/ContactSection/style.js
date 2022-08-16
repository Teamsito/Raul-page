import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

export const DivStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${viewport.medium}) {
    flex-direction: column;
  }
`;

export const ContentDiv = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${viewport.large}) {
    width: 45%;
  }
  @media (max-width: ${viewport.medium}) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: ${viewport.small}) {
    font-size: 14px;
  }
`;

export const ImgStyle = styled.img`
  height: 50%;
  width: 65%;
  @media (max-width: ${viewport.large}) {
    width: 80%;
  }
  @media (max-width: ${viewport.medium}) {
    height: 45%;
    width: 30%;
    margin-top: 10px;
  }
  @media (max-width: ${viewport.small}) {
    display: none;
  }
`;
export const TextStyle = styled.p`
  max-width: 57ch;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: ${theme.textcolor};
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.large}) {
    font-size: 18px;
  }
  @media (max-width: ${viewport.medium}) {
    font-size: 16px;
  }
  @media (max-width: ${viewport.small}) {
    font-size: 14px;
  }
`;
export const UlStyle = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
export const ButtonStyle = styled.li`
  height: 60px;
  width: 360px;
  background: ${theme.button};
  font-family: ${fonts.fontText};
  color: ${theme.textcolor};
  font-size: 22px;
  margin: 10px 0;
  border: 1px ${theme.dark} solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${theme.primary};
    background: ${theme.secundary};
  }
  @media (max-width: ${viewport.medium}) {
    font-size: 18px;
    width: 300px;
    height: 40px;
  }
  @media (max-width: ${viewport.small}) {
    font-size: 16px;
    width: 235px;
  }
`;
