import React from 'react';
import styled from 'styled-components';

interface InputStyle {
  width?: string;
  height?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
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
    color: 'white'
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
