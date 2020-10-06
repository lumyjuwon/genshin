import React from "react";
import styled from "styled-components";

export function Header({children}: any) {

  const Header = styled.header({
    borderBottom: "1px solid #515253",
    backgroundColor: "#111213",
  });

  return (
    <Header>
      {children}
    </Header>
  );
}
