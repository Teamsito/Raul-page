import styled from "styled-components";
import {theme} from '../../../theme';

export const Card = styled.div`
    position:relative;
    background:${theme.dark};
    display:flex;
    justify-content:center;
    align-items:center;
    width: 299.82px;
    height: 400px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 80%;    
`;

export const Subtitle = styled.h3`
    position:absolute;
    top:-25px;
    color:${theme.secundary}; 
`;