import React from "react";
import styled from "styled-components";

import { SquareButton } from "./SquareButton";

interface ButtonProps {
  onClick: Function;
}

interface TitleProps {}

interface Props extends ButtonProps, TitleProps {
  title: string;
}

const Title = styled.a((props: TitleProps) => {
  return {};
});

export function SquareTextButton(props: Props) {
  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
    >
      <Title>{props.title}</Title>
    </SquareButton>
  );
}
