import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  width: '40vw',
  justifyContent: 'center',
  alignItems: 'center'
});

interface Props {
  children: any;
}

export function GridWrapper(props: Props) {
  return <Wrapper>{props.children}</Wrapper>;
}
