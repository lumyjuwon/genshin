import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

export function CenterAlignDiv({ children }: Props) {
  const CenterAlignDiv = styled.div({
    textAlign: "center",
  })

  return <CenterAlignDiv>{children}</CenterAlignDiv>
}