import React from 'react';
import styled from 'styled-components'

export function ScreenInnerWrapper({ children }: any){
  const ScreenInnerWrapper = styled.div({
    maxWidth: "1200px",
    margin: "0 auto"
  })

  return (
    <ScreenInnerWrapper>
      {children}
    </ScreenInnerWrapper>
  );
}