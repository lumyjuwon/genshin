import React from "react";
import styled from "styled-components";

import { RoundButton } from "./RoundButton";

interface Props {
  children: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Title = styled.a((props: TitleProps) => {
  return {};
});

export function RoundTextButton(props: Props) {
  return (
    <RoundButton onClick={props.onClick}>
      <Title>{props.children}</Title>;
    </RoundButton>
  );
}
