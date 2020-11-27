import React from 'react';
import styled from 'styled-components';

interface Style {
  color?: string;
}

const ColoredBox = styled.div<Style>((props) => {
  return {
    padding: '40px 30px',
    width: 'fit-content',
    margin: '0 auto',
    borderRadius: '30px',
    backgroundColor: props.color || '#313233',
    boxShadow: '2px 2px 1px rgba(20, 20, 20, .4)',
    '@media screen and (max-width: 1380px)': {
      padding: '20px 15px'
    },
    '@media screen and (max-width: 768px)': {
      padding: '20px 5px',
      width: '100%'
    }
  };
});

interface Props {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: string;
}

export function ContentBackgroundBox(props: Props) {
  return <ColoredBox color={props.backgroundColor}>{props.children}</ColoredBox>;
}
