import React from "react";
import styled from "styled-components";

export function Header({children}: any) {

  const Header = styled.header({
    padding: "0 100px",
    borderBottom: "1px solid #515253",
    backgroundColor: "#111213",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  });

  return (
    <Header>
      {children}
    </Header>
  );
}
