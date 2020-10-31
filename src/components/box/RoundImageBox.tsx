import React from 'react';
import styled from 'styled-components';

import { ImageSrc } from 'src/resources/images';

import { RoundImage } from '../image/RoundImage';

export interface Style {
  readonly width?: string;
  readonly height?: string;
  readonly borderRadius?: string;
  readonly boxShadow?: string;
  readonly objectFit?: 'inherit' | 'none' | '-moz-initial' | 'initial' | 'revert' | 'unset' | 'fill' | 'contain' | 'cover' | 'scale-down';
}

const Container = styled.div<Style>((props: Style) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: props.width || '100px',
    height: props.height || '100px'
  };
});

interface Props {
  src: ImageSrc;
  styles?: Style;
}

export function RoundImageBox(props: Props) {
  return <Container {...props.styles}>{props.src !== null && <RoundImage {...props.styles} src={props.src} />}</Container>;
}
