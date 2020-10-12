import React from "react";
import styled from "styled-components";

export interface ButtonStyle {
  display?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
  margin?: string;
  cursor?: string;
  height?: string;
  shadow?: string;
}

const Button = styled.div<ButtonStyle>((props: ButtonStyle) => {
  return {
    display: props.display ? props.display : "inline-block",
    border: props.border ? props.border : "2px solid #f1f2f3",
    borderRadius: props.borderRadius ? props.borderRadius : "8px",
    width: props.width ? props.width : "fit-content",
    padding: props.padding ? props.padding : "5px 5px",
    margin: props.margin ? props.margin : "10px",
    cursor: props.cursor ? props.cursor : "pointer",
    transition: "0.2s",
    "&:hover": {
      borderColor: "transparent",
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
