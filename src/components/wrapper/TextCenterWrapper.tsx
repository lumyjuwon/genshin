import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | string;
}

const TextCenterDiv = styled.div({
  textAlign: "center",
})

export function TextCenterWrapper({ children }: Props) {

  return <TextCenterDiv>{children}</TextCenterDiv>
}