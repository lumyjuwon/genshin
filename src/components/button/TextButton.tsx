import React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  children: string;
}

const Button = styled.a((props: Props) => {
  return {
    display: "inline-block",
    margin: "5px 10px",
    transition: "0.1s",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: "2px solid #f1f2f3",
    },
  };
});

export function TextButton(props: Props) {
  return <Button href={props.href}>{props.children}</Button>;
}
