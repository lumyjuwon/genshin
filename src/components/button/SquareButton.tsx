import React from 'react';
import styled from 'styled-components';

export interface ButtonStyle {
  readonly width?: string;
  readonly height?: string;
  readonly display?: string;
  readonly padding?: string;
  readonly border?: string;
  readonly borderColor?: string;
  readonly backgroundColor?: string;
}

const Button = styled.button<ButtonStyle>((props: ButtonStyle) => {
  return {
    width: props.width || 'fit-content',
    height: props.width || 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    display: props.display || 'inline-block',
    padding: props.padding || '0px',
    border: props.border || 'solid',
    borderColor: props.borderColor || 'white',
    backgroundColor: props.backgroundColor || 'transparent',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    position: "relative",
    overflow: "hidden",
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
