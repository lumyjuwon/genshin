import React from 'react';
import styled from 'styled-components';

interface ContainerStyle {
  readonly width?: string;
  readonly height?: string;
  readonly border?: string;
  readonly borderColor?: string;
}

const Container = styled.div<ContainerStyle>((props: ContainerStyle) => {
  return {
    width: props.width || 'fit-content',
    height: props.height || 'auto',
    borderColor: props.borderColor || 'white'
  };
});

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
    padding: '6px',
    fontSize: '16px',
    color: 'white',
    border: props.border || 'solid',
    borderColor: props.borderColor || 'transparent',
    backgroundColor: 'transparent'
  };
});

interface Props {
  placeholder?: string;
  styles?: {
    ContainerStyles?: ContainerStyle;
    InputStyle?: InputStyle;
  };
}

export function UnderlineInputText(props: Props) {
  return (
    // <Container style={props.styles?.ContainerStyles}>
    <Input placeholder={props.placeholder} {...props.styles?.InputStyle}></Input>
    // </Container>
  );
}
