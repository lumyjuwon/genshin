import React from 'react';
import styled from 'styled-components';

interface Style {
  color?: string;
}

const Container = styled.div({
  width: '100%',
  display: 'flex',
  padding: '10px',
  margin: '10px',
  borderRadius: '20px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#333435'
});

const Name = styled.div<Style>((props) => {
  return {
    color: props.color || '#f1f2f3',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '3px 0 0',
    '@media screen and (max-width: 1380px)': {
      fontSize: '16px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: '14px'
    }
  };
});

interface Props {
  children?: JSX.Element | JSX.Element[];
  name: string;
  image: JSX.Element;
  styles?: Style;
}

export function ItemContentBox(props: Props) {
  return (
    <Container>
      {props.image}
      <Name {...props.styles}>{props.name}</Name>
      {props.children}
    </Container>
  );
}
