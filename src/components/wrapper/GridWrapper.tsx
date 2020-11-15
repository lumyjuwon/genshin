import React from 'react';
import styled from 'styled-components';

interface Styles {
  width?: string;
  medium?: {
    width?: string;
  };
  small?: {
    width?: string;
  };
}

const Wrapper = styled.div<Styles>((props) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    width: props.width || '40vw',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || '90%'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || '100%'
    }
  };
});

interface Props {
  children: any;
  styles?: Styles;
}

export function GridWrapper(props: Props) {
  return <Wrapper {...props.styles}>{props.children}</Wrapper>;
}
