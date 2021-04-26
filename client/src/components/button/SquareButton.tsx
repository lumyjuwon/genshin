import React from 'react';
import styled from 'styled-components';

export interface ButtonStyle {
  readonly width?: string;
  readonly height?: string;
  readonly display?: string;
  readonly padding?: string;
  readonly border?: string;
  readonly backgroundColor?: string;
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
  };
}

const Button = styled.button<ButtonStyle>((props: ButtonStyle) => {
  console.log(props);
  return {
    width: props.width || 'fit-content',
    height: props.height || 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    display: props.display || 'inline-block',
    padding: props.padding || '0px',
    border: props.border || '1px solid transparent',
    backgroundColor: props.backgroundColor || 'transparent',
    pointerEvents: props.pointerEvents || 'auto',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
    outline: 'none',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || 'fit-content',
      height: props.medium?.height || 'fit-content'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || 'fit-content',
      height: props.small?.height || 'fit-content'
    }
  };
});

interface Props {
  onClick: Function;
  children: JSX.Element;
  styles?: ButtonStyle;
}

export function SquareButton(props: Props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
      {...props.styles}
    >
      {props.children}
    </Button>
  );
}
