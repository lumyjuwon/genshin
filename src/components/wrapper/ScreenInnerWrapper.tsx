import React from 'react';
import styled from 'styled-components'

interface Props {
  children: JSX.Element
}

const ScreenWrapperDiv = styled.div({
  maxWidth: "1200px",
  margin: "0 auto"
})

export function ScreenInnerWrapper({ children }: Props){

  return (
    <ScreenWrapperDiv>
      {children}
    </ScreenWrapperDiv>
  );
}