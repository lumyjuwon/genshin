import React from "react";
import styled from "styled-components";

export interface ButtonStyle{
  readonly width?: string;
  readonly height?: string;
}

const Button = styled.button<ButtonStyle>((props: ButtonStyle) => {
  return {
    width: props.width || "fit-content",
    height: props.height || "auto",
    userSelect: "none"
  };
});

interface Props {
  onClick: Function;
  children: JSX.Element;
  styles?: ButtonStyle;
}

export function SquareButton(props: Props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
      {...props.styles}
    >
      {props.children}
    </Button>
  );
}
