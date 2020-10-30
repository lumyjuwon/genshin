import React from 'react';
import styled from 'styled-components';

interface DivStyle {
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  medium?: {
    width?: string;
    fontSize?: string;
  };
  small?: {
    width?: string;
    fontSize?: string;
  };
}

interface Props {
  children: JSX.Element | string;
  styles?: DivStyle;
}

const TextCenterDiv = styled.div<DivStyle>((props: DivStyle) => {
  return {
    textAlign: 'center',
    width: props.width || 'fit-content',
    margin: props.margin || '10px',
    fontSize: props.fontSize || 'inherit',
    padding: props.padding || '5px',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || props.width || 'fit-content',
      fontSize: props.medium?.fontSize || props.fontSize || 'inherit'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      fontSize: props.small?.fontSize || props.fontSize || 'inherit'
    }
  };
});

export function TextCenterWrapper({ children, styles }: Props) {
  return <TextCenterDiv {...styles}>{children}</TextCenterDiv>;
}
