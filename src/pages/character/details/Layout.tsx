import React from 'react';
import styled from 'styled-components';

import { BoxModelWrapper } from 'src/components';

const Container = styled.div<{ top?: boolean }>((props) => {
  return {
    width: '100%',
    margin: props.top ? '0' : '50px 0 0'
  };
});

const Line = styled.hr({
  width: '100%'
});

const Title = styled.div({
  fontSize: '22px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '18px'
  }
});

interface Props {
  title: string;
  children: JSX.Element;
  id: string;
  top?: boolean;
}

export function Layout(props: Props) {
  return (
    <Container id={props.id} top={props.top}>
      <Title>{props.title}</Title>
      <Line />
      <BoxModelWrapper styles={{ margin: '20px 0 0', medium: { margin: '20px 0 0' }, small: { margin: '20px 0 0' } }}>
        {props.children}
      </BoxModelWrapper>
    </Container>
  );
}
