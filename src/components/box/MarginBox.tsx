import React from 'react';
import styled from 'styled-components';

interface Margin {
  margin?: string;
  medium?: {
    margin?: string;
  };
  small?: {
    margin?: string;
  };
}

const Box = styled.div<Margin>((props: Margin) => {
  return {
    margin: props.margin || '0',
    '@media screen and (max-width: 1380px)': {
      margin: props.medium?.margin || props.margin || '0'
    },
    '@media screen and (max-width: 768px)': {
      margin: props.small?.margin || props.margin || '0'
    }
  };
});

interface Props {
  children: JSX.Element;
  styles: Margin;
}

export function MarginBox(props: Props) {
  return <Box {...props.styles}>{props.children}</Box>;
}
