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
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    MozUserSelect: "none",
    userSelect: "none",
    transition: ".2s ease-out",
    "&:hover": {
      backgroundColor: props["&:hover"]?.backgroundColor || "#515253"
    },
    "&.selected": {
      boxShadow: "inset 0 -2px 0 #f1f2f3",
    }
  };
});

interface Props {
  children: string | JSX.Element;
  styles?: {
    buttonStyles?: ButtonStyle;
  };
  onClick?: Function;
  refProp?: React.RefObject<HTMLAnchorElement>
}

export function TextBlockButton(props: Props) {
  return (
    <Button {...props.styles?.buttonStyles} onClick={() => props.onClick?.()} ref={props.refProp}>
      {props.children}
    </Button>
  );
}
