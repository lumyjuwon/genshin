import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | string;
}

export function TextCenterWrapper({ children }: Props) {
  const TextCenterWrapper = styled.div({
    textAlign: "center",
  })

  return <TextCenterWrapper>{children}</TextCenterWrapper>
}