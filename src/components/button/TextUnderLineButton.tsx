import React from 'react';
import styled from 'styled-components';

interface ButtonStyle {
  readonly display?: 'block' | 'inline-block';
  readonly margin?: string;
  readonly '&:hover'?: {
    readonly borderBottom?: string;
  };
}

const Button = styled.div<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display || 'inline-block',
    margin: props.margin || '5px 10px',
    transition: '0.1s',
    borderBottom: '2px solid transparent',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      borderBottom: props['&:hover']?.borderBottom || '2px solid #f1f2f3'
    }
  };
});

interface Props {
  children: string | JSX.Element;
  styles?: {
    buttonStyles?: ButtonStyle;
  };
  onClick?: Function;
}

export function TextUnderLineButton(props: Props) {
  return (
    <Button {...props.styles?.buttonStyles} onClick={() => props.onClick?.()}>
      {props.children}
    </Button>
  );
}
