import React from "react";
import styled from "styled-components";

// import { InnerDiv } from './InnerDiv';

export function Header({ children }: any) {

  const Header = styled.header({
    borderBottom: "1px solid #515253",
    backgroundColor: "#111213",
    marginBottom: "20px",
  });

  const HeaderInner = styled.div({
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
  })

  // const Test = styled(InnerDiv)({
  //   display: "flex",
  //   alignItems: "center"
  // })

  return (
    <Header>
      <HeaderInner>
        {children}
      </HeaderInner>
    </Header>
  );
}
