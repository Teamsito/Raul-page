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
      height: 90vh;
    }
    @media (max-width: ${viewport.medium}) {
      height: 100vh;
    }
    @media (max-width: ${viewport.xsmall, viewport.small}) {
      height: 60vh;
    }

}
`;
export const DivImg = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${viewport.large, viewport.medium}) {
    height: 50%;
    width: 80%;
  }
   @media (max-width: ${viewport.large, viewport.medium}) {
    height: 50%;
    width: 80%;
  }
  @media (max-width: ${viewport.xsmall,viewport.small}) {
    height: 30%;
    width: 80%;
  }
`;
export const ImgStyle = styled.img`
  height: 65%;
  width: 75%;
  @media (max-width: ${viewport.large,viewport.medium}) {
    height: 85%;
    width: 40%;
  }
  @media (max-width: ${viewport.xsmall, viewport.small}) {
    height: 80%;
    width: 50%;
  }
`;
export const DivText = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${viewport.large}) {
    height: 50%;
    width: 100%;
    padding-top:20px;
  }
  }
  @media (max-width: ${viewport.xsmall , viewport.small}) {
    height: 70%;
    width: 80%;
    padding: 30px;

  }
`;
export const TittleStyle = styled.h2`
  font-size: 34px;
  border-bottom: 5px double ${theme.secundary};
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.large,viewport.medium}) {
    font-size: 28px;
  }
`;
export const TextStyle = styled.p`
  max-width: 57ch;
  font-size: 20px;
  color: ${theme.textcolor};
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.large,viewport.medium}) {
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: ${viewport.xsmall, viewport.small}) {
    font-size: 14px;
    overflow: auto;
  }
  
`;
