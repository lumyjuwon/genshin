import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element
}

const FooterDiv = styled.footer({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#444546",
  borderTop: "1px solid #616263",
  padding: "20px 150px",
  textAlign: "center",
  "@media screen and (max-width: 768px)": {
    padding: "20px 50px"
  }
});

export function Footer(props: Props) {
  return <FooterDiv>{props.children}</FooterDiv>;
}
