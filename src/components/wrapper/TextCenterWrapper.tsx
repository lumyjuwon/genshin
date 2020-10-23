import React from 'react';
import styled from 'styled-components';

interface DivStyle {
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
}

interface Props {
  children: JSX.Element | string;
  styles?: DivStyle;
}

const TextCenterDiv = styled.div<DivStyle>((props: DivStyle) => {
  
  return {
    textAlign: "center",
    width: props.width || "fit-content",
    margin: props.margin || "10px",
    fontSize: props.fontSize || "inherit",
    padding: props.padding || "5px",
  }
})

export function TextCenterWrapper({ children, styles }: Props) {

  return <TextCenterDiv {...styles}>{children}</TextCenterDiv>
}