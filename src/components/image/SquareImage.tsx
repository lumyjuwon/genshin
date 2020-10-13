import React from "react";
import styled from "styled-components";

export interface ImageStyle{
  width?: string;
  height?: string;
  boxShadow?: string;
}

const Image = styled.img<ImageStyle>(({ width, height, boxShadow }: ImageStyle) => {
  return {
    width: width ? width : "100px",
    height: height ? height: "100px",
    boxShadow: boxShadow ? boxShadow : "none"
  };
});

interface Props {
  src: any;
  styles?: ImageStyle;
}

export function SquareImage(props: Props) {
  return <Image {...props.styles} src={props.src} />;
}
