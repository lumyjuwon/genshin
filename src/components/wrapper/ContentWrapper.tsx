import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.div({
  paddingTop: '50px',
  paddingLeft: '100px',
  paddingRight: '100px',
  paddingBottom: '50px'
});

export function ContentWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
