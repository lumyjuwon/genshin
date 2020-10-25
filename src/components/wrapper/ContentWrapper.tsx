import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div({
  padding: '5vh 100px'
});

export function ContentWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
