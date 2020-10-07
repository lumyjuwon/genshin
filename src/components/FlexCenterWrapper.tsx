import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

export function FlexCenterWrapper({ children }: Props) {
  const FlexCenterWrapper = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })

  return(
    <FlexCenterWrapper>
      {children}
    </FlexCenterWrapper>
  );
}