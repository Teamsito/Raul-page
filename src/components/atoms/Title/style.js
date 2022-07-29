import styled from "styled-components";
import {theme} from '../../../theme';

export const Title = styled.h2`

    color:${theme.textcolor};
   text-align:center;
   display:block;
    position:relative;
    font-weight: 500;
    font-size:35px;
    line-height: 65px;
    border-bottom:1px solid ${theme.textcolor};
    z-index:10;
    &:before{
        content: "";
        border:1px solid ${theme.textcolor};
        width:38%;
        position:absolute;
        top:35px;
        left:20px;
    }
    &:after{
        content: "";
        border:1px solid ${theme.textcolor};
        width:38%;
        position:absolute;
        top:35px;
        right:20px;
    }
`;

export const Line = styled.hr`
    position:absolute;
    top:35px;
`