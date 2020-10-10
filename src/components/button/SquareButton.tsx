import React from "react";
import styled from "styled-components";

interface Props {
  onClick: Function;
  children: React.ReactElement;
}

export function SquareButton(props: Props) {
  const SquareButton = styled.div({});

  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </SquareButton>
  );
}
