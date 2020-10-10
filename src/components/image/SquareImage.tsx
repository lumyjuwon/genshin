import React from "react";
import styled from "styled-components";

interface Props {
  src: any;
  width?: number;
  height?: number;
}

const Image = styled.img((props: Props) => {
  return {
    width: props.width ? `${props.width}px` : `100px`,
    height: props.height ? `${props.width}px` : `100px`,
  };
});

export function SquareImage(props: Props) {
  return <Image src={props.src} width={props.width} height={props.height} />;
}
