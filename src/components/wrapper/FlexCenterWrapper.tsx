import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
  direction?: string;
}

export function FlexCenterWrapper(props: Props) {
  const defaultProps = {
    children: undefined,
    flexDirection: "row"
  }

  const combinedProps: Props = Object.assign({}, defaultProps, props);

  const FlexCenterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flexDirection: ${combinedProps.direction};
  `

  return(
    <FlexCenterWrapper>
      {combinedProps.children}
    </FlexCenterWrapper>
  );
}