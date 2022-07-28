import styled from "styled-components";
import { theme, imgTheme, viewport } from "../../theme";

export const DivStyle = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: ${theme.secundary};
`;
export const DivEmail = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media (max-width: ${viewport.large}) {
    width: 40%;
  }
`;
export const DivPhone = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${viewport.large}) {
    width: 40%;
  }
`;
export const ImgStyle = styled.img`
  height: ${imgTheme.height};
  width: ${imgTheme.width};
`;
export const TextStyle = styled.p`
  font-size: 18px;
  margin-left: 20px;
  letter-spacing: 0.5px;
`;
