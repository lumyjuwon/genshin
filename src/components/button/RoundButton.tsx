import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
  onClick?: Function;
  style?: object;
}

export function RoundButton(props: Props) {
  const RoundButton = styled.div({
    display: "inline-block",
    border: "2px solid #f1f2f3",
    borderRadius: "8px",
    width: "fit-children",
    padding: "5px 5px",
    margin: "10px",
    cursor: "pointer",
    ...props.style,
  });

  return (
    <RoundButton onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if(props.onClick){
        props.onClick()
      }
    }}>
      {props.children}
    </RoundButton>
  );
}