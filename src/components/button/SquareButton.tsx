import React from "react";
import styled from "styled-components";

interface Props {
  onClick: Function;
  children: React.ReactElement;
}

const Button = styled.div((props: Props) => {
  return {};
});

export function SquareButton(props: Props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </Button>
  );
}
