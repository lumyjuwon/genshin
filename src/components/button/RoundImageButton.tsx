import React from 'react';
import { RoundImage, Style } from '../image/RoundImage';
import { RoundButton, ButtonStyle } from './RoundButton';

interface Props {
  readonly src: string | null;
  readonly onClick: Function;
  readonly styles?: {
    readonly buttonStyles?: ButtonStyle;
    readonly imageStyles?: Style;
  };
}

export function RoundImageButton(props: Props) {
  return (
    <RoundButton onClick={props.onClick} styles={props.styles?.buttonStyles}>
      <RoundImage src={props.src} styles={props.styles?.imageStyles}></RoundImage>
    </RoundButton>
  );
}
