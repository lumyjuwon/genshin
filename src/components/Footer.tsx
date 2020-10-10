import React from "react";
import styled from "styled-components";

export function Footer({ children }: any) {
  const Footer = styled.footer({
    backgroundColor: "#444546",
    borderTop: "1px solid #616263",
    marginTop: "20px",
    padding: "20px 150px",
    textAlign: "center",
  });

  return <Footer>{children}</Footer>;
}
