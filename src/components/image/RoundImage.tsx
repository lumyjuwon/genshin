import React from "react";
import styled from "styled-components";

interface Props {
  src: any;
  width?: number;
  height?: number;
  borderRadius?: number;
}

const Image = styled.img((props: Props) => {
  return {
    src: props.src,
    width: props.width ? `${props.width}px` : `100px`,
    height: props.height ? `${props.width}px` : `100px`,
    borderRadius: "25%",
  };
});

export function RoundImage(props: Props) {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
    />
  );
}
