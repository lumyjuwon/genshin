import React from "react";
import styled from "styled-components";

import { RoundButton, ButtonStyle } from "./RoundButton";

interface TextStyle {
  fontSize?: string;
  color?: string;
}

const Text = styled.a<TextStyle>((props: TextStyle) => {
  return {
    fontSize: props.fontSize ? props.fontSize : "16px",
    color: props.color ? props.color : "#f1f2f3"
  };
});

interface Props{
  onClick: Function;
  children: string;
  styles?: {
    buttonStyles?: ButtonStyle;
    textStyles?: TextStyle;
  }
}

export function RoundTextButton(props: Props) {
  return (
    <RoundButton onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.onClick?.();
    }} 
    styles={props.styles?.buttonStyles}>
      <Text {...props.styles?.textStyles}>{props.children}</Text>
    </RoundButton>
  );
}
