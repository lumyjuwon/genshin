import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  padding: '10px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#313233'
});

const Name = styled.div({});

interface Props {
  children: JSX.Element;
  title: string;
}

export function ItemContentBox(props: Props) {
  return <div></div>;
}
