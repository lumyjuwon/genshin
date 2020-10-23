import React from "react";
import styled from "styled-components";

export interface ButtonStyle {
  readonly display?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly width?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly cursor?: string;
  readonly height?: string;
  readonly shadow?: string;
  readonly backgroundColor?: string;
  readonly color?: string;
  readonly pointerEvents?:
    | "fill"
    | "stroke"
    | "none"
    | "auto"
    | "inherit"
    | "initial"
    | "-moz-initial"
    | "revert"
    | "unset"
    | "all"
    | "visible"
    | "painted"
    | "visibleFill"
    | "visiblePainted"
    | "visibleStroke";
}

const Button = styled.div<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display || "flex",
    border: props.border || "2px solid #f1f2f3",
    borderRadius: props.borderRadius || "8px",
    width: props.width || "fit-content",
    height: props.height || "auto",
    padding: props.padding || "5px 5px",
    margin: props.margin || "10px",
    cursor: props.cursor || "pointer",
    pointerEvents: props.pointerEvents || "auto",
    backgroundColor: props.backgroundColor || "transparent",
    color: props.color || "#f1f2f3",
    transition: "0.2s",
    "&:hover": {
      backgroundColor: "#f1f2f3",
      color: "#212223",
    },
  };
});

export interface Props {
  onClick: Function;
  children: JSX.Element;
  styles?: ButtonStyle;
}

export function RoundButton(props: Props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
      {...props.styles}
    >
      {props.children}
    </Button>
  );
}
