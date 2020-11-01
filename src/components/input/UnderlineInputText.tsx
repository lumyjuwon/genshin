import React from 'react';
import styled from 'styled-components';

interface InputStyle {
  width?: string;
  height?: string;
  border?: string;
  borderColor?: string;
}

const Input = styled.input<InputStyle>((props: InputStyle) => {
  return {
    width: props.width || 'auto',
    height: props.height || 'auto',
    border: props.border || 'solid',
    borderColor: props.borderColor || 'transparent',
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

export function UnderlineInputText(props: Props) {
  return <Input placeholder={props.placeholder} {...props.styles?.InputStyle}></Input>;
}
