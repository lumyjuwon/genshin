import React from "react";
import { RoundImage, ImageStyle } from "../image/RoundImage";
import { RoundButton, ButtonStyle } from "./RoundButton";

interface Props {
  readonly src: string;
  readonly onClick: Function;
  readonly styles?: {
    readonly buttonStyles?: ButtonStyle;
    readonly imageStyles?: ImageStyle;
  };
}

export function RoundImageButton(props: Props) {
  return (
    <RoundButton onClick={props.onClick} styles={props.styles?.buttonStyles}>
      <RoundImage
        src={props.src}
        styles={props.styles?.imageStyles}
      ></RoundImage>
    </RoundButton>
  );
}
