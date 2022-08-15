import styled from "styled-components";
import { theme, viewport } from "../../../assets/css/theme";

export const DivStyle = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.secundary};
  @media (max-width: ${viewport.small}) {
    height:60vh;
  }
`;

export const SectionStyle = styled.div`
  height: 85%;
  width: 70%;
  border: 1px solid ${theme.primary};
  border-radius: 20px;
  overflow:auto;
`;