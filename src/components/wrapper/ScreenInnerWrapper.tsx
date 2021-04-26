import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const ScreenWrapperDiv = styled.div({
  width: '1300px',
  margin: '0 auto',
  '@media screen and (max-width: 1380px)': {
    width: '700px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%'
  }
});

export function ScreenInnerWrapper({ children }: Props) {
  return <ScreenWrapperDiv>{children}</ScreenWrapperDiv>;
}
