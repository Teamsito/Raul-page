import styled from "styled-components";
import {theme,viewport} from '../../../assets/css/theme';

export const Footer = styled.div`
    position:relative;
    background:${theme.secundary};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    height: 370px;
    padding:0 20px;
    @media (max-width: ${viewport.medium}) {
        width: 200px;
        height: 370px;
      }
`;
export const FooterLogo = styled.div`
   grid-area: 1 / 1 / 4 / 2; 
   display:flex;
   align-items:center;
    & img {
        width:326px;
    }
    border-right:1px solid;
`
export const FooterInfo = styled.div`
   grid-area: 1 / 2 / 3 / 6;
    display:flex;
    border-bottom:1px solid;
    margin:0 20px;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    & ul {
        list-style:none;
    }
    & li, h2 {
        font-family: 'GFS Neohellenic';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 32px;
        letter-spacing: 0.045em;
        margin:20px 0;
        color:#fff;
    }
  
`
export const FooterBot = styled.div`
    grid-area: 3 / 2 / 4 / 6;   
    display:flex;
    padding:20px;
    align-items:center;
    justify-content:space-between;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.045em;
    color: #1E1E1E;
`
export const Image = styled.img`
    width: 80%;    
`;  

export const Subtitle = styled.h3`
    position:absolute;
    top:-25px;
    color:${theme.secundary}; 
`;