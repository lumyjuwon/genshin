import React from "react";
import styled from "styled-components";

export interface ImageStyle{
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Image = styled.img<ImageStyle>((props: ImageStyle) => {
  return {
    width: '100px',
    height: '100px',
    borderRadius: '25%',
    ...props
  }
})

interface Props {
  src: any;
  styles?: ImageStyle
}

export function RoundImage(props: Props) {
  return (
      <Image {...props}/>
  );
}
