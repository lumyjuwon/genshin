import React from 'react';
import styled from 'styled-components';

import { ImageSrc } from 'src/resources/images';
import { RoundImage, Style } from '../image/RoundImage';

export interface BoxStyle {
  readonly display?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly width?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly cursor?: string;
  readonly height?: string;
  readonly shadow?: string;
  readonly backgroundColor?: string;
  readonly color?: string;
  readonly pointerEvents?:
    | 'fill'
    | 'stroke'
    | 'none'
    | 'auto'
    | 'inherit'
    | 'initial'
    | '-moz-initial'
    | 'revert'
    | 'unset'
    | 'all'
    | 'visible'
    | 'painted'
    | 'visibleFill'
    | 'visiblePainted'
    | 'visibleStroke';
  readonly medium?: {
    readonly width?: string;
    readonly height?: string;
  };
  readonly small?: {
    readonly width?: string;
    readonly height?: string;
    readonly margin?: string;
  };
}

const Wrapper = styled.div<BoxStyle>((props: BoxStyle) => {
  return {
    display: props.display || 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: props.border || '2px solid #f1f2f3',
    borderRadius: props.borderRadius || '8px',
    width: props.width || 'fit-content',
    height: props.height || 'fit-content',
    padding: props.padding || '4px',
    margin: props.margin || '8px',
    cursor: props.cursor || 'pointer',
    pointerEvents: props.pointerEvents || 'auto',
    backgroundColor: props.backgroundColor || 'transparent',
    color: props.color || '#f1f2f3',
    transition: '0.2s',
    position: 'relative',
    overflow: 'hidden',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || props.width || 'fit-content',
      height: props.medium?.height || props.height || 'fit-content'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      height: props.small?.height || props.height || 'fit-content',
      margin: props.small?.margin || props.margin || '8px'
    }
  };
});

interface Props {
  src: ImageSrc;
  styles: {
    boxStyle: BoxStyle;
    imageStyle: Style;
  };
}

export function RoundImageBox(props: Props) {
  return (
    <Wrapper {...props.styles.boxStyle}>
      <RoundImage src={props.src} {...props.styles.imageStyle}></RoundImage>
    </Wrapper>
  );
}
