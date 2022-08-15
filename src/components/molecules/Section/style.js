import styled from "styled-components";
import { fonts, theme, viewport } from "../../../assets/css/theme";

import {getColor} from '../../../../services/getColor.services';

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
  @media (max-width: ${viewport.xsmall, viewport.small,viewport.medium}) {
    align-content: space-between;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
export const LiText = styled.li`
  max-width: 57ch;
  font-size: 20px;
  padding: 15px;
  color:${props => getColor(props.color)};
  font-family: ${fonts.fontText};
  @media (max-width: ${viewport.small}) {
    font-size: 14px;
  }
`;
