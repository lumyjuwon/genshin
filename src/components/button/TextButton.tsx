import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string,
  children: string
}

export function TextButton({ href, children }: Props){
  const TextButton = styled.a({
    display: "inline-block",
    margin: "5px 10px",
    transition: "0.1s",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderBottom: "2px solid #f1f2f3"
    }
  })

  return (
    <TextButton href={href}>
      {children}
    </TextButton>
  );
}