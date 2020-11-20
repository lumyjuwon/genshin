import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FlexWrapper } from 'src/components';
import { HeaderMenu } from './HeaderMenu';
import { useHistory } from 'react-router-dom';
import { ServerSelector } from './ServerSelector';
import { LangaugeSelector } from './LangaugeSelector';

export interface Navs {
  [navName: string]: Nav;
}

export interface Nav {
  isHeaderMenu: boolean;
  path: string;
  title: string;
  component: React.FunctionComponent;
}

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
  onClick?: Function;
}

let storagedSelectedPath = window.sessionStorage.getItem('nav');

export const HeaderNavigation = React.forwardRef<HTMLDivElement, Props>((props, forwardedRef) => {
  const history = useHistory();
  const [selectedNavPath, setSelectedNavPath] = useState<string>(storagedSelectedPath || '/');

  useEffect(() => {
    history.listen((location) => {
      setSelectedNavPath(location.pathname);
    });
  }, [history, props.navs]);

  storagedSelectedPath = selectedNavPath;
  window.sessionStorage.setItem('nav', storagedSelectedPath.toString());

  return (
    <Navigation ref={forwardedRef}>
      <NavList>
        <FlexWrapper styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column' } }}>
          <FlexWrapper styles={{ small: { flexDirection: 'column', width: '100%' } }}>
            {Object.keys(props.navs).map((navName: string) => {
              const nav = props.navs[navName];
              console.log(nav.path, window.sessionStorage.getItem('nav'));
              if (nav.isHeaderMenu) {
                return (
                  <HeaderMenu
                    key={navName}
                    link={nav.path}
                    title={nav.title}
                    isSelected={window.sessionStorage.getItem('nav') === nav.path}
                    onClick={props.onClick}
                  />
                );
              }
              return null;
            })}
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <ServerSelector />
          <LangaugeSelector />
        </FlexWrapper>
      </NavList>
    </Navigation>
  );
});
