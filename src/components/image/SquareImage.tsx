import React from "react";
import styled from "styled-components";

export interface ImageStyle{
  width?: string;
  height?: string;
}

const Image = styled.img<ImageStyle>((props: ImageStyle) => {
  return {
    width: '100px',
    height: '100px',
    ...props
  };
});

interface Props {
  src: any;
  styles?: ImageStyle;
}

export function SquareImage(props: Props) {
  return <Image {...props} />;
}
