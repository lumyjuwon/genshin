import React from "react";
import styled from "styled-components";

export interface ImageStyle{
  readonly width?: string;
  readonly height?: string;
  readonly boxShadow?: string;
}

const Image = styled.img<ImageStyle>((props: ImageStyle) => {
  return {
    width: props.width || "100px",
    height: props.height || "100px",
    boxShadow: props.boxShadow || "none"
  };
});

interface Props {
  src: any;
  styles?: ImageStyle;
}

export function SquareImage(props: Props) {
  return <Image {...props.styles} src={props.src} />;
}
