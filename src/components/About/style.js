import styled from "styled-components";
import { theme, imgTheme, viewport } from "../../theme";

export const SectionStyle = styled.section`
    height: 70vh;
    width: 100%;
    background: ${theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export const DivImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgStyle = styled.img`
  height: 65%;
  width: 75%;
`;
export const DivText = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TittleStyle = styled.h2`
  font-size: 34px;
  border-bottom: 5px double ${theme.secundary};
`;
export const TextStyle = styled.p`
  max-width: 65ch;
  font-size: 20px;
  margin-top: 10px;
`;
