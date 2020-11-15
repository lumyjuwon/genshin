import React, { useState } from 'react';
import styled from 'styled-components';

import { Navs } from 'src/App';
import { FlexWrapper } from 'src/components';
import { HeaderMenu } from './HeaderMenu';
import { useHistory } from 'react-router-dom';

const Navigation = styled.div({
  flaot: 'right',
  width: '100%',
  '@media screen and (max-width: 768px)': {
    textAlign: 'right'
  }
});

const NavList = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  '@media screen and (max-width: 768px)': {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '10vh',
    left: '0',
    backgroundColor: '#111',
    textAlign: 'center',
    zIndex: 15
  }
});

interface Props {
  navs: Navs;
}

export function HeaderNavigation(props: Props) {
  const history = useHistory();
  const [selectedNavPath, setSelectedNavPath] = useState<string>('');

  history.listen((location) => {
    setSelectedNavPath(location.pathname);
  });

  return (
    <Navigation>
      <NavList>
        <FlexWrapper styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column' } }}>
          <FlexWrapper styles={{ small: { flexDirection: 'column', width: '100%' } }}>
            {Object.keys(props.navs).map((navName: string) => {
              const nav = props.navs[navName];
              return <HeaderMenu key={navName} link={nav.path} title={nav.title} isSelected={selectedNavPath === nav.path} />;
            })}
          </FlexWrapper>
        </FlexWrapper>
      </NavList>
    </Navigation>
  );
}