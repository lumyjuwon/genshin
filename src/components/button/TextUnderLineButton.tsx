import React from "react";
import styled from "styled-components";

interface ButtonStyle{
  readonly display?: "block" | "inline-block",
  readonly margin?: string,
  readonly "&:hover"?: {
    readonly borderBottom?: string
  },
}

const Button = styled.a<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display || "inline-block",
    margin: props.margin || "5px 10px",
    transition: "0.1s",
    userSelect: "none",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: props["&:hover"]?.borderBottom || "2px solid #f1f2f3",
    }
  };
});

interface Props {
  href: string;
  children: string;
  styles?: {
    buttonStyles?: ButtonStyle;
  }
}

export function TextUnderLineButton(props: Props) {
  return <Button href={props.href} {...props.styles?.buttonStyles}>{props.children}</Button>;
}
