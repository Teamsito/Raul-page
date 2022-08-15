import React from "react";
import {
  DivStyle,
  DivEmail,
  DivPhone,
  ImgStyle,
  TextStyle,
} from "../Infobar/style";
import Mail from "../../../assets/img/Mail.png";
import Phone from "../../../assets/img/Phone.png";

function index() {
  return (
    <DivStyle>
      <DivEmail>
        <ImgStyle src={Mail} alt="" />
        <TextStyle>Test@Email.com</TextStyle>
      </DivEmail>
      <DivPhone>
        <ImgStyle src={Phone} alt="" />
        <TextStyle>999-999-999</TextStyle>
      </DivPhone>
    </DivStyle>
  );
}

export default index;
