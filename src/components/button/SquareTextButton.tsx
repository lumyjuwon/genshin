import React from 'react';
import styled from 'styled-components';

import { SquareButton, ButtonStyle } from './SquareButton';

interface TextStyle {
  readonly fontSize?: string;
  readonly color?: string;
}

const Text = styled.a<TextStyle>((props: TextStyle) => {
  return {
    fontSize: props.fontSize || '16px',
    color: props.color || '#f1f2f3',
    cursor: 'pointer'
  };
});

interface Props {
  onClick: Function;
  children: JSX.Element | string;
  styles?: {
    buttonStyles?: ButtonStyle;
    textStyles?: TextStyle;
  };
}

export function SquareTextButton(props: Props) {
  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
      styles={props.styles?.buttonStyles}
    >
      <Text {...props.styles?.textStyles}>{props.children}</Text>
    </SquareButton>
  );
}
