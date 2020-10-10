import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | null;
  onClick?: Function;
  display?: string,
  border?: string,
  borderRadius?: string,
  width?: string,
  padding?: string,
  margin?: string,
  cursor?: string,
  height?: string,
  shadow?: string,
}

export function RoundButton(props: Props) {
  const defaultProps: Props = {
    children: null,
    display: "inline-block",
    border: "2px solid #f1f2f3",
    borderRadius: "8px",
    width: "fit-content",
    height: "fit-content",
    padding: "5px 5px",
    margin: "10px",
    cursor: "pointer",
  }

  const combinedProps: Props = Object.assign({}, defaultProps, props);

  const RoundButton = styled.div({
    display: "inline-block",
    border: "2px solid #f1f2f3",
    borderRadius: "8px",
    width: "fit-content",
    padding: "5px 5px",
    margin: "10px",
    cursor: "pointer"
  });

  return (
    <RoundButton onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.onClick?.();
    }}>
      {props.children}
    </RoundButton>
  );
}
