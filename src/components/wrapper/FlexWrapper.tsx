import React from 'react';
import styled from 'styled-components';

interface DivProps {
  display?: "flex" | "inline";
  flexDirection?: "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
  justifyContent?: string;
  alignItems?: string;
}

const FlexDiv = styled.div<DivProps>((props: DivProps) => {
    return {
      display: props.display ? props.display : "flex",
      flexDirection: props.flexDirection ? props.flexDirection : "row",
      justifyContent: props.justifyContent ? props.justifyContent : "center",
      alignItems: props.alignItems ? props.alignItems : "center",
    }
  }
)

interface Props {
  children: JSX.Element;
  styles?: DivProps
}

export function FlexWrapper(props: Props) {
  return(
    <FlexDiv {...props.styles}>
      {props.children}
    </FlexDiv>
  );
}
