import React from 'react';
import styled from 'styled-components';

interface DivProps {
  display?: string;
  flexDirection?: "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
  justifyContent?: string;
  alignItems?: string;
}

const FlexDiv = styled.div<DivProps>(
  (props: DivProps) => {
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ...props
    }
  }
)

interface Props{
  children: JSX.Element;
  styles?: DivProps;
}

export function FlexWrapper(props: Props) {
  return(
    <FlexDiv {...props.styles}>
      {props.children}
    </FlexDiv>
  );
}
