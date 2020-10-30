import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div({
  width: '100%',
  minHeight: '90vh',
  padding: '5vh 20px'
});

export function ContentWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
