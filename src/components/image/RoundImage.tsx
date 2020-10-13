import React from "react";
import styled from "styled-components";

export interface ImageStyle{
  width?: string;
  height?: string;
  borderRadius?: string;
  boxShadow?: string;
}

const Image = styled.img<ImageStyle>((props: ImageStyle) => {
  return {
    width: props.width ? props.width : '100px',
    height: props.height ? props.height : '100px',
    borderRadius: props.borderRadius ? props.borderRadius : '8px',
    boxShadow: props.boxShadow ? props.boxShadow : "none"
  }
})

interface Props {
  src: any;
  styles?: ImageStyle
}

export function RoundImage(props: Props) {
  return (
    <Image {...props.styles} src={props.src} />
  );
}
