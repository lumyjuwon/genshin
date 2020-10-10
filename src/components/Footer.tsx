import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const FooterDiv = styled.footer({
  backgroundColor: "#444546",
  borderTop: "1px solid #616263",
  marginTop: "20px",
  padding: "20px 150px",
  textAlign: "center",
});

export function Footer(props: Props) {
  return <FooterDiv>{props.children}</FooterDiv>;
}
