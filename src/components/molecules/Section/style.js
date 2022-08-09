import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

export const UlStyle = styled.ul`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: start;
  justify-items: center;
  align-content: space-evenly;
  list-style: none;
`;
export const LiText = styled.li`
  max-width: 57ch;
  font-size: 20px;
  padding: 15px;
  color: ${theme.primary};
  font-family: ${fonts.fontText}
`;
