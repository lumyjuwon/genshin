import React from "react";
import styled from "styled-components";

interface ButtonStyle{
  display?: string,
  width?: string,
  padding?: string,
  fontSize?: string,
  fontColor?: string,
  "&:hover"?: {
    backgroundColor?: string,
  },
}

const Button = styled.a<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: "block",
    width: "fit-content",
    padding: "20px 10px",
    fontSize: "22px",
    fontColor: "#f1f2f3",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#515253",
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

export function TextBlockButton(props: Props) {
  return <Button href={props.href} {...props.styles?.buttonStyles}>{props.children}</Button>;
}
