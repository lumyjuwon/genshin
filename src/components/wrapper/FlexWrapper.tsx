import React from 'react';
import styled from 'styled-components';

interface DivProps {
  display?: "flex" | "inline-flex";
  flexDirection?: "inherit" | "row" | "-moz-initial" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row-reverse" | undefined;
  justifyContent?: string;
  alignItems?: string;
}

interface Props{
  children?: JSX.Element;
  styles?: DivProps;
}

const FlexDiv = styled.div((props: DivProps) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...props
  }
})

export function FlexWrapper(props: Props) {
  return(
    <FlexDiv {...props.styles}>
      {props.children}
    </FlexDiv>
  );
}