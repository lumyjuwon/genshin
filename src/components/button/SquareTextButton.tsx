import React from "react";
import styled from "styled-components";

import { SquareButton } from "./SquareButton";

interface Props {
  onClick: Function;
  title: string;
}

export function SquareTextButton(props: Props) {
  const Title = styled.a({});

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
