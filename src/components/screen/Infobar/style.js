import styled from "styled-components";
import { theme, imgTheme, viewport, fonts } from "../../../assets/css/theme";

export const DivStyle = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${theme.secundary};
`;
export const DivEmail = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media (max-width: ${viewport.large}) {
    width: 40%;
    margin-left: 10px;
  }
  @media (max-width: ${viewport.medium}) {
    width: 50%;
    margin-left: 10px;
  }
`;
export const DivPhone = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${viewport.large}) {
    width: 40%;
  }
  @media (max-width: ${viewport.medium}) {
    width: 50%;
  }
`;
export const ImgStyle = styled.img`
  height: ${imgTheme.height};
  width: ${imgTheme.width};
`;
export const TextStyle = styled.p`
  font-size: 17px;
  margin-left: 10px;
  color: ${theme.textcolor};
  letter-spacing: 0.5px;
  font-weight: 500;
  font-family: ${fonts.fontTitle2};
`;
