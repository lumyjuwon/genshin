import React from 'react';
import styled from 'styled-components';

interface Props {
  content: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: any
}

export function RoundButtonContainer({ onClick, content, style }: Props) {

  const RoundButton = styled.div({
    display: "inline-block",
    border: "2px solid #f1f2f3",
    borderRadius: "8px",
    width: "fit-content",
    padding: "5px 5px",
    margin: "10px",
    cursor: "pointer",
    ...style,
  });

  return (
    <RoundButton onClick={onClick}>
      {content}
    </RoundButton>
  );

}