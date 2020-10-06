import React from "react";
import styled from "styled-components";

export function TextLinkButton({ href, children }: propType) {
  const TextLinkButton = styled.a({
    display: "block",
    width: "fit-content",
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
    <TextLinkButton href={href}>
      {children}
    </TextLinkButton>
  );
}
interface propType {
  href: string,
  children: string
}