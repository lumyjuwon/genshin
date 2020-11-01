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
  readonly small?: {
    readonly width: string;
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
    '&:hover': {
      // backgroundColor: props['&:hover']?.backgroundColor || '#515253',
      textShadow: '0 0 8px #f1f2f3, 0 0 15px #f1f2f3, 0 0 20px #f1f2f3',
      boxShadow: 'inset 0 -2px 0 #f1f2f3'
    },
    '&.selected': {
      boxShadow: 'inset 0 -2px 0 #f1f2f3'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content'
    }
  };
});

interface Props {
  children: string | JSX.Element;
  styles?: {
    buttonStyles?: ButtonStyle;
  };
  onClick?: Function;
  refProp?: React.RefObject<HTMLDivElement>;
}

export function TextBlockButton(props: Props) {
  return (
    <Button {...props.styles?.buttonStyles} onClick={() => props.onClick?.()} ref={props.refProp}>
      {props.children}
    </Button>
  );
}
