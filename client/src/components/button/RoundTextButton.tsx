import React from 'react';
import styled from 'styled-components';

import { RoundButton, ButtonStyle } from './RoundButton';

interface TextStyle {
  readonly fontSize?: string;
  readonly color?: string;
  medium?: {
    readonly fontSize?: string;
  };
  small?: {
    readonly fontSize?: string;
  };
}

const Text = styled.a<TextStyle>((props: TextStyle) => {
  return {
    fontSize: props.fontSize || '16px',
    // add color property in RoundButton component
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || '16px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || '14px'
    }
  };
});

interface Props {
  onClick: Function;
  children: string | JSX.Element;
  styles?: {
    buttonStyles?: ButtonStyle;
    textStyles?: TextStyle;
  };
}

export function RoundTextButton(props: Props) {
  return (
    <RoundButton
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onClick?.();
      }}
      styles={props.styles?.buttonStyles}
    >
      <Text {...props.styles?.textStyles}>{props.children}</Text>
    </RoundButton>
  );
}
