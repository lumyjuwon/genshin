import React from "react";
import styled from "styled-components";

export interface ButtonStyle{
  width?: string;
  height?: string;
}

const Button = styled.button<ButtonStyle>((props: ButtonStyle) => {
  return {
    ...props
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
