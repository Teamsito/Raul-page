import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

export const Footer = styled.footer`
  position: relative;
  background: ${theme.secundary};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 50vh;
  padding: 0 0 0 20px;
  @media (max-width: 710px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${viewport.small}) {
    height: 55vh;
  }
`;
export const FooterLogo = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  align-items: center;
  & img {
    width: 326px;
    @media (max-width: ${viewport.large}) {
      width: 210px;
    }
    @media (max-width: ${viewport.medium}) {
      width: 160px;
    }
    @media (max-width: ${viewport.small}) {
      width: 120px;
    }
  }
  border-right: 1px solid;
`;
export const FooterInfo = styled.div`
  grid-area: 1 / 2 / 3 / 6;
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
  /* margin: 0 20px; */
  justify-content: space-around;
  align-items: center;
  text-align: center;
  & ul {
    list-style: none;
  }
  & li,
  h2 {
    font-family: ${fonts.fontText};
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.045em;
    margin: 20px 0;
    color: #fff;
    @media (max-width: ${viewport.large}) {
      font-size: 22px;
    }
    @media (max-width: ${viewport.medium}) {
      font-size: 18px;
    }
    @media (max-width: ${viewport.small}) {
      font-size: 12px;
    }
    @media (max-width: ${viewport.xsmall}) {
      margin: 10px 0;
    }
  }
`;
export const FooterBot = styled.div`
  grid-area: 3 / 2 / 4 / 6;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  justify-content: space-between;
  font-family: "Alata";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.045em;
  color: #1e1e1e;
  @media (max-width: ${viewport.medium}) {
    width: 100%;
  }
  @media (max-width: ${viewport.small}) {
    padding: 0;    
    align-items: flex-start;
    flex-direction: column;
  }
`;
export const Image = styled.img`
  height: 90px;
  margin-top: 20px;
  @media (max-width: ${viewport.large}) {
    height: 65px;
  }
  @media (max-width: ${viewport.medium}) {
    height: 40px;
  }
  @media (max-width: ${viewport.medium}) {
    height: 40px;
  }
`;

export const Subtitle = styled.h3`
  position: absolute;
  top: -25px;
  color: ${theme.secundary};
`;
export const TextCopy = styled.h4`
  font-family: ${fonts.fontText};
  font-size: 16px;
  color: #e2e2e2;
  @media (max-width: ${viewport.medium}) {
    font-size: 12px;
  }
  @media (max-width: ${viewport.small}) {
    font-size: 8px;
  }
`;
export const DivContentImg = styled.div`
  @media (max-width: ${viewport.small}) {
    display: none;
  }
`;
