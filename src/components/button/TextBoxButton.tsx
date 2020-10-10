import React from "react";
import styled from "styled-components";

interface Props {
  href: string,
  children: string
}

export function TextBoxButton({ href, children }: Props) {
  const TextBoxButton = styled.a({
    display: "block",
    width: "fit-content",
    padding: "20px 10px",
    fontSize: "22px",
    color: "#f1f2f3",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#515253",
    },
  });

  return (
    <TextBoxButton href={href}>
      {children}
    </TextBoxButton>
  );
}