import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

export const DivStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgStyle = styled.img`
  height: 50%;
  width: 65%;
`;
export const TextStyle = styled.p`
  max-width: 57ch;
  font-size: 20px;
  margin-top: 20px;
  color: ${theme.textcolor};
  font-family: ${fonts.fontText};
  @media (max-width: 1300px) {
    font-size: 16px;
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
`;
