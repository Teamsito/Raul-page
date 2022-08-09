import React from "react";
import { UlStyle, LiText } from "./style";

const index = ({ listItem }) => {
  return (
    <UlStyle>
      {listItem.map((item, i) => (
        <LiText key={i}>{item}</LiText>
      ))}
    </UlStyle>
  );
};

export default index;
