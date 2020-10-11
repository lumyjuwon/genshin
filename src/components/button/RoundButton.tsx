import React from "react";
import styled from "styled-components";

interface ButtonProps {
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

interface Props{
  onClick: Function;
  children: JSX.Element | string | null;
  styles?: ButtonProps
}

const defaultButtonProps: ButtonProps = {
  display: "inline-block",
  border: "2px solid #f1f2f3",
  borderRadius: "8px",
  width: "fit-content",
  padding: "5px 5px",
  margin: "10px",
  cursor: "pointer",
}

const Button = styled.div((props: ButtonProps) => {
  return {
    ...props,
    transition: "0.2s",
    "&:hover": {
      borderColor: "transparent",
      backgroundColor: "#f1f2f3",
      color: "#212223"
    }
  };
});

export function RoundButton(props: Props) {
  return (
    <Button
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          props.onClick?.();
        }
      }
      style={{...defaultButtonProps, ...props.styles}}
    >
      {props.children}
    </Button>
  );
}
