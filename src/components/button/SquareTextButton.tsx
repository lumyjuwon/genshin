import React from "react";
import styled from "styled-components";

import { SquareButton, ButtonStyle } from "./SquareButton";

interface TitleStyle {}

const Title = styled.a<TitleStyle>((props: TitleStyle) => {
  return {
    ...props
  };
});

interface Props {
  onClick: Function;
  title: string;
  buttonStyles?: ButtonStyle;
  titleStyles?: TitleStyle
}


export function SquareTextButton(props: Props) {
  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
      styles={props.buttonStyles}
    >
      <Title>{props.title}</Title>
    </SquareButton>
  );
}
