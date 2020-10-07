import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: any;
  children: string;
}

export function RoundButton({ onClick, children }: Props) {
  const RoundButton = styled.div({
    display: "inline-block",
    fontSize: "20px",
    border: "2px solid #f1f2f3",
    borderRadius: "8px",
    width: "fit-content",
    padding: "5px 5px",
    margin: "10px",
    transition: "0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f1f2f3",
      color: "#212223"
    }
  });

  return (
    <RoundButton onClick={onClick}>
      {children}
    </RoundButton>
  );

}