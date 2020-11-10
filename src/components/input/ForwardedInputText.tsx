import React from 'react';
import styled from 'styled-components';

interface InputStyle {
  width?: string;
  height?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  medium?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  };
  small?: {
    fontSize?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
  };
}

const Input = styled.input<InputStyle>((props: InputStyle) => {
  return {
    width: props.width || 'auto',
    height: props.height || 'auto',
    border: props.border || 'none',
    borderRadius: props.borderRadius || '0',
    backgroundColor: 'transparent',
    padding: '6px',
    fontSize: '16px',
    color: 'white',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || props.width || 'auto',
      height: props.medium?.height || props.height || 'auto',
      borderRadius: props.medium?.borderRadius || props.borderRadius || '0'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'auto',
      height: props.small?.height || props.height || 'auto',
      fontSize: props.small?.fontSize || '16px',
      borderRadius: props.small?.borderRadius || props.borderRadius || '0'
    }
  };
});

interface Props {
  placeholder?: string;
  styles?: {
    InputStyle?: InputStyle;
  };
}

export const ForwardedInputText = React.forwardRef<HTMLInputElement, Props>((props, forwardedRef) => {
  return <Input ref={forwardedRef} placeholder={props.placeholder} {...props.styles?.InputStyle}></Input>;
});
