import React from 'react';
import styled from 'styled-components';

import { HeaderNavigation, Navs } from './HeaderNavigation';
import { LangaugeSelector } from './LangaugeSelector';
import { MainLogo } from './MainLogo';
import { RegionSelector } from './RegionSelector';

const HeaderOuter = styled.header({
  borderBottom: '1px solid #515253',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  position: 'relative',
  zIndex: 999
});

const HeaderInner = styled.div({
  maxWidth: '80vw',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  minHeight: '10vh',
  '@media screen and (max-width: 768px)': {
    justifyContent: 'space-between',
    margin: '0',
    minWidth: '100%',
    padding: '0 10px'
  }
});

interface Props {
  navs: Navs;
}

export function Header(props: Props) {
  return (
    <HeaderOuter>
      <HeaderInner>
        <MainLogo />
        <HeaderNavigation navs={props.navs} />
        <RegionSelector />
        <LangaugeSelector />
      </HeaderInner>
    </HeaderOuter>
  );
}
