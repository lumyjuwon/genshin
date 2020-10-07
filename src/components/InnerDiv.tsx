import React from 'react';
import styled from 'styled-components'

export function InnerDiv({ children }: any){
  const InnerDiv = styled.div({
    maxWidth: "1200px",
    margin: "0 auto"
  })

  return (
    <InnerDiv>
      {children}
    </InnerDiv>
  );
}