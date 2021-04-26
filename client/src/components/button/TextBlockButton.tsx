import React from 'react';
import styled from 'styled-components';

interface ButtonStyle {
  readonly display?: 'block' | 'inline-block';
  readonly width?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly color?: string;
  readonly '&:hover'?: {
    readonly backgroundColor?: string;
  };
  readonly medium?: {
    readonly fontSize?: string;
  };
  readonly small?: {
    readonly width?: string;
    readonly fontSize?: string;
  };
}

const Button = styled.div<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display || 'block',
    width: props.width || 'fit-content',
    padding: props.padding || '20px 10px',
    fontSize: props.fontSize || '22px',
    color: props.color || '#fff',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    transition: '.2s ease-out',
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || props.fontSize || '22px'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      padding: '15px 10px',
      fontSize: props.small?.fontSize || props.fontSize || '22px'
    }
  };
});

interface Props {
  children: string | JSX.Element;
  styles?: {
    buttonStyles?: ButtonStyle;
  };
}

export function TextBlockButton(props: Props) {
  return <Button {...props.styles?.buttonStyles}>{props.children}</Button>;
}
