import React from 'react';
import styled from 'styled-components';

export interface ButtonStyle {
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
  }
  readonly small?: {
    readonly width?: string;
    readonly height?: string;
    readonly margin?: string;
  }
}

const Button = styled.div<ButtonStyle>((props: ButtonStyle) => {
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
    position: "relative",
    overflow: "hidden",
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: '#f1f2f3',
      color: '#212223'
    },
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || (props.width || "fit-content"),
      height: props.medium?.height || (props.height || "fit-content")
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || (props.width || "fit-content"),
      height: props.small?.height || (props.height || "fit-content"),
      margin: props.small?.margin || (props.margin || "8px")
    }
  };
});

export interface Props {
  onClick: Function;
  children: JSX.Element;
  styles?: ButtonStyle;
}

export function RoundButton(props: Props) {
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
