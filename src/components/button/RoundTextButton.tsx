import React from "react";
import styled from "styled-components";

import { RoundButton } from "./RoundButton";

interface ButtonProps {
  onClick?: Function;
}

interface TitleProps {}

interface Props extends ButtonProps, TitleProps {
  children: string | JSX.Element; 
}

const Title = styled.a((props: TitleProps) => {
  return {};
});

export function RoundTextButton(props: Props) {
  return (
    <RoundButton
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onClick?.();
      }}
    >
      <>
        <Title>{props.children}</Title>
      </>
    </RoundButton>
  );
}
