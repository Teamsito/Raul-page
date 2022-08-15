import styled from "styled-components";
import { fonts, theme,viewport } from "../../../assets/css/theme";

export const Title = styled.h2`
  background:${theme.secundary};
  color: ${theme.primary};
  text-align: center;
  display: block;
  position: relative;
  font-family: ${fonts.fontTitle2};
  font-weight: 500;
  font-size: 35px;
  line-height: 65px;
  border-bottom: 1px solid ${theme.primary};
  z-index: 10;
  &:before {
    content: "";
    border-bottom: 1px solid ${theme.primary};
    width: 35%;
    position: absolute;
    top: 35px;
    left: 20px;
    @media (max-width: ${viewport.large}) {
      width: 20%;
    }
    @media (max-width: ${viewport.medium}) {
      width: 5%;
    }
    @media (max-width: ${viewport.small}) {
      border: none;
    }
  }
  &:after {
    content: "";
    border-bottom: 1px solid ${theme.primary};
    width: 35%;
    position: absolute;
    top: 35px;
    right: 20px;
    @media (max-width: ${viewport.large}) {
      width: 20%;
    }
    @media (max-width: ${viewport.medium}) {
      width: 5%;
    }
    @media (max-width: ${viewport.small}) {
      border: none;
    }
  }
  @media (max-width: ${viewport.xsmall, viewport.small}) {
    font-size: 18px
  }
`;

export const Line = styled.hr`
  position: absolute;
  top: 35px;
`;
