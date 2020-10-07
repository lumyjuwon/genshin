import React from "react";
import styled from "styled-components";

export function TextBoxButton({ href, children }: propType) {
  const TextBoxButton = styled.a({
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
  });

  return (
    <TextBoxButton href={href}>
      {children}
    </TextBoxButton>
  );
}
interface propType {
  href: string,
  children: string
}