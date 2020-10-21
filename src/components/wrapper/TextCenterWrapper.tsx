import React from 'react';
import styled from 'styled-components';

interface DivStyle {
  width?: string;
  margin?: string;
}

interface Props {
  children: JSX.Element | string;
  styles?: DivStyle;
}

const TextCenterDiv = styled.div<DivStyle>((props: DivStyle) => {
  
  return {
    textAlign: "center",
    width: props.width || "fit-content",
    margin: props.margin || "10px"
  }
})

export function TextCenterWrapper({ children, styles }: Props) {

  return <TextCenterDiv {...styles}>{children}</TextCenterDiv>
}