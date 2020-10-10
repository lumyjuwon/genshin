import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const HeaderOuter = styled.header({
  borderBottom: "1px solid #515253",
  backgroundColor: "#111213",
  marginBottom: "20px",
});

const HeaderInner = styled.div({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
});

export function Header(props: Props) {
  return (
    <HeaderOuter>
      <HeaderInner>{props.children}</HeaderInner>
    </HeaderOuter>
  );
}
