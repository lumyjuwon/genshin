import React from "react";
import { RoundImage, ImageStyle } from "../image/RoundImage";
import { RoundButton, ButtonStyle } from "./RoundButton";

interface Props{
  src: any;
  onClick: Function;
  styles?: {
    buttonStyles?: ButtonStyle;
    imageStyles?: ImageStyle;
  }
}

export function RoundImageButton(props: Props) {
  return (
    <RoundButton onClick={props.onClick} styles={props.styles?.buttonStyles}>
      <RoundImage {...props} styles={props.styles?.imageStyles}></RoundImage>
    </RoundButton>
  )
}
