import React from 'react';
import styled from 'styled-components';

interface DivProps {
  readonly display?: "flex" | "inline";
  readonly flexDirection?: "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" | undefined;
  readonly justifyContent?: string;
  readonly alignItems?: string;
  readonly width?: string;
}

const FlexDiv = styled.div<DivProps>((props: DivProps) => {
    return {
      display: props.display || "flex",
      flexDirection: props.flexDirection || "row",
      justifyContent: props.justifyContent || "center",
      alignItems: props.alignItems || "center",
      width: props.width || "auto",
    }
  }
)

interface Props {
  children: JSX.Element | string;
  styles?: DivProps
}

export function FlexWrapper(props: Props) {
  return(
    <FlexDiv {...props.styles}>
      {props.children}
    </FlexDiv>
  );
}
