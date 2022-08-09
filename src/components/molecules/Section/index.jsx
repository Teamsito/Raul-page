import React from "react";
import { UlStyle, LiText } from "./style";

const index = ({item, item_b , item_c, item_d, item_e, item_f}) => {
  return (
      <UlStyle>
        <LiText>
          {item}
        </LiText>
        <LiText>
          {item_b}
        </LiText>
        <LiText>
          {item_c}
        </LiText>
        <LiText>
          {item_d}
        </LiText>
        <LiText>
          {item_e}
        </LiText>
        <LiText>
          {item_f}
        </LiText>
      </UlStyle>
  );
}

export default index;
