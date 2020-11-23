import React from 'react';
import styled from 'styled-components';

import { BoxModelWrapper } from 'src/components';

const Container = styled.div({
  width: '100%',
  margin: '50px 0 0'
});

const Line = styled.hr({
  width: '100%'
});

const Title = styled.div({
  fontSize: '22px',
  fontWeight: 'bold'
});

interface Props {
  title: string;
  children: JSX.Element;
}

export function Layout(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Line />
      <BoxModelWrapper styles={{ margin: '20px 0 0' }}>{props.children}</BoxModelWrapper>
    </Container>
  );
}
