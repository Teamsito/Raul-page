import React from 'react'
import {DivStyle, ContentDiv, ImgStyle, TextStyle, UlStyle, ButtonStyle} from './style'
import ImgContact from '../../../assets/img/Contact.png'

function index({textImg,buttonWp,buttonEmail,buttonFb}) {
  return (
    <DivStyle>
        <ContentDiv>
            <ImgStyle src={ImgContact} alt="" />
            <TextStyle>{textImg}</TextStyle>
        </ContentDiv>
        <ContentDiv>
            <UlStyle>
              <ButtonStyle>{buttonWp}</ButtonStyle>
              <ButtonStyle>{buttonEmail}</ButtonStyle>
              <ButtonStyle>{buttonFb}</ButtonStyle>
            </UlStyle>
        </ContentDiv>
    </DivStyle>
  )
}

export default index