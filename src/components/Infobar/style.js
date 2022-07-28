import styled from "styled-components";
import { theme, imgTheme } from "../../theme";

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
`;
export const DivPhone = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const ImgStyle = styled.img`
  height: ${imgTheme.height};
  width: ${imgTheme.width};
`;
export const TextStyle = styled.p`
  font-size: 18px;
  margin-left: 10px;
`;
