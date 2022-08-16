import styled from "styled-components";
import { theme, viewport } from "../../../assets/css/theme";

export const DivStyle = styled.div`
  height: 70vh;
  width: 100%;
  background: ${theme.primary};
  @media (max-width: ${viewport.small}) {
    height: 70vh;
  }
`;