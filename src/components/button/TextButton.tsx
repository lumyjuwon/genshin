import React from "react";
import styled from "styled-components";

interface ButtonStyle{
  display?: string,
  margin?: string,
  transition?: string,
  borderBottom?: string,
  "&:hover"?: {
    borderBottom?: string
  },
}

const Button = styled.a<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: "inline-block",
    margin: "5px 10px",
    transition: "0.1s",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: "2px solid #f1f2f3",
    },
    ...props
  };
});

interface Props {
  href: string;
  children: string;
  styles?: {
    buttonStyles?: ButtonStyle;
  }
}

export function TextButton(props: Props) {
  return <Button href={props.href} {...props.styles?.buttonStyles}>{props.children}</Button>;
}
