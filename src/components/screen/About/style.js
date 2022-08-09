import styled from "styled-components";
import { theme, imgTheme, viewport, fonts } from "../../../assets/css/theme";

export const SectionStyle = styled.section`
    height: 70vh;
    width: 100%;
    background: ${theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${viewport.large}) {
      flex-direction: column-reverse;
      height: 75vh;
    }
    @media (max-width: ${viewport.small}) {
      height: 100vh;
    }
    @media (max-width: ${viewport.xsmall}) {
      height: 150vh;
    }
}
`;
export const DivImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${viewport.large}) {
    height: 50%;
    width: 80%;
  }
`;
export const ImgStyle = styled.img`
  height: 65%;
  width: 75%;
  @media (max-width: ${viewport.large}) {
    height: 80%;
    width: 50%;
  }
  @media (max-width: ${viewport.small}) {
    height: 80%;
    width: 90%;
  }
  @media (max-width: ${viewport.xsmall}) {
    height: 65%;
    width: 90%;
  }
`;
export const DivText = styled.div`
  width: 40%;
  height: 100%;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${viewport.large}) {
    height: 50%;
    width: 90%;
    padding: 0;
  }
`;
export const TittleStyle = styled.h2`
  font-size: 34px;
  border-bottom: 5px double ${theme.secundary};
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.large}) {
    font-size: 28px;
  }
`;
export const TextStyle = styled.p`
  max-width: 57ch;
  font-size: 20px;
  margin-top: 10px;
  font-family: ${fonts.fontText};
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  
`;
