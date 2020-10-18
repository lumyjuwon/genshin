import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.div({
  padding: "100px"
});

export function ContentWrapper({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
