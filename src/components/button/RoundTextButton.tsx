import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: string;
}

export function RoundTextButton({ onClick, children }: Props) {
  const RoundTextButton = styled.div({
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
    <RoundTextButton onClick={onClick}>
      {children}
    </RoundTextButton>
  );

}