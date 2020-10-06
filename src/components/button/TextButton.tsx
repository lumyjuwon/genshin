import React from "react";
import styled from "styled-components";

export function TextButton({ href, children }: propType) {
  const TextButton = styled.a({
    width: "fit-content",
    display: "block",
    padding: "20px 10px",
    fontSize: "25px",
    fontColor: "#f1f2f3",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#515253",
    },
  });

  return (
    <TextButton href={href}>
      {children}
    </TextButton>
  );
}
interface propType {
  href: string,
  children: string
}