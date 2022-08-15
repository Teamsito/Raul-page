import styled from "styled-components";
import { theme, viewport } from "../../../assets/css/theme";

export const Services = styled.section`
  height: 70vh;
  align-items: center;
  background: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  padding: 0px 5px;
  @media (max-width: ${viewport.large}) {
    height: 125vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${viewport.medium}) {
    height: 100vh;
  }
  @media (max-width: ${viewport.small}) {
    height: 60vh;
  }
`;
