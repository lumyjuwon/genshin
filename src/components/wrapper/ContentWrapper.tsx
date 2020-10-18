import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.div({
  margin: "100px"
});

export function ContentWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
