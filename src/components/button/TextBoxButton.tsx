import React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  children: string;
}

const Button = styled.a((props: Props) => {
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
  };
});

export function TextBoxButton(props: Props) {
  return <Button href={props.href}>{props.children}</Button>;
}
