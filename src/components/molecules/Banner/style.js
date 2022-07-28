import styled from "styled-components";
import {theme} from "../../../theme"
import BannerImg from '../../../assets/img/banner.png';

export const MainBanner = styled.div`
    background: url(${BannerImg}) no-repeat center center; 
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 10%;
`;
export const Information = styled.h1`
    flex: 1;
    color:#fff;
    text-shadow: 1px 4px 6px black;
`
export const ImgLogo = styled.img`
    flex: 1;
`