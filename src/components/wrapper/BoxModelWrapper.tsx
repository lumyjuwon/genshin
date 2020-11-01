import React from 'react';
import styled from 'styled-components';

interface Margin {
  margin?: string;
  padding?: string;
  medium?: {
    margin?: string;
    padding?: string;
  };
  small?: {
    margin?: string;
    padding?: string;
  };
}

const Box = styled.div<Margin>((props: Margin) => {
  return {
    margin: props.margin || '0',
    padding: props.padding || '0',
    '@media screen and (max-width: 1380px)': {
      margin: props.medium?.margin || 'inherit',
      padding: props.medium?.padding || 'inherit'
    },
    '@media screen and (max-width: 768px)': {
      margin: props.small?.margin || 'inherit',
      padding: props.small?.padding || 'inherit'
    }
  };
});

interface Props {
  children: JSX.Element | JSX.Element[];
  styles: Margin;
}

export function BoxModelWrapper(props: Props) {
  return <Box {...props.styles}>{props.children}</Box>;
}
