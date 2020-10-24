import React from "react";
import styled from "styled-components";

interface ButtonStyle {
  readonly display?: "block" | "inline-block";
  readonly width?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly color?: string;
  readonly "&:hover"?: {
    readonly backgroundColor?: string;
  };
}

const Button = styled.a<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display || "block",
    width: props.width || "fit-content",
    padding: props.padding || "20px 10px",
    fontSize: props.fontSize || "22px",
    color: props.color || "#f1f2f3",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: props["&:hover"]?.backgroundColor || "#515253"
    },
    ...props
  };
});

interface Props {
  href: string;
  children: string;
  styles?: {
    buttonStyles?: ButtonStyle;
  };
}

export function TextBlockButton(props: Props) {
  return (
    <Button href={props.href} {...props.styles?.buttonStyles}>
      {props.children}
    </Button>
  );
}
