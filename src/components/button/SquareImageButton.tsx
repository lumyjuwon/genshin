import React from "react";

import { SquareButton, ButtonStyle } from "./SquareButton";
import { SquareImage, ImageStyle } from "../image/SquareImage";

interface Props {
  onClick: Function;
  src: any;
  styles?: {
    buttonStyles?: ButtonStyle;
    imageStyles?: ImageStyle; 
  }
}

export function SquareImageButton(props: Props) {
  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
      {...props.styles?.buttonStyles}
    >
      <SquareImage
        src={props.src}
        styles={props.styles?.imageStyles}
      />
    </SquareButton>
  );
}
