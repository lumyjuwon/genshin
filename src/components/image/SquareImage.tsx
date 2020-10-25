import React from 'react';
import styled from 'styled-components';

export interface ImageStyle {
  readonly width?: string;
  readonly height?: string;
  readonly boxShadow?: string;
  readonly objectFit?: 'inherit' | 'none' | '-moz-initial' | 'initial' | 'revert' | 'unset' | 'fill' | 'contain' | 'cover' | 'scale-down';
}

const Image = styled.img<ImageStyle>((props: ImageStyle) => {
  return {
    width: props.width || '100px',
    height: props.height || '100px',
    boxShadow: props.boxShadow || 'none',
    objectFit: props.objectFit || 'fill'
  };
});

interface Props {
  src: string | null;
  styles?: ImageStyle;
}

export function SquareImage(props: Props) {
  if (props.src === null) {
    return null;
  }
  return <Image {...props.styles} src={props.src} />;
}
