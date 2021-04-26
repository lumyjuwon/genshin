import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { FlexWrapper } from 'src/components';
import { HeaderMenu } from './HeaderMenu';
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
    width: '200px',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '10vh',
    right: '0',
    backgroundColor: '#111',
    textAlign: 'center',
    zIndex: 15
  }
});

function getBasePathName(pathName: string): string {
  const basePathName = pathName.split('/')[1];
  if (basePathName) {
    return `/${pathName.split('/')[1]}`;
  }

  return pathName;
}

interface Props {
  navs: Navs;
  onClick?: Function;
}

export const HeaderNavigation = React.forwardRef<HTMLDivElement, Props>((props, forwardedRef) => {
  const [selectedNavPath, setSelectedNavPath] = useState<string>(window.location.pathname);
  const history = useHistory();

  console.log(window.location);

  useEffect(() => {
    const historyListener = history.listen((location) => {
      setSelectedNavPath(location.pathname);
    });

    return () => {
      historyListener();
    };
  }, [history, props.navs]);

  return (
    <Navigation ref={forwardedRef}>
      <NavList>
        <FlexWrapper styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column' } }}>
          <FlexWrapper styles={{ small: { flexDirection: 'column', width: '100%' } }}>
            {Object.keys(props.navs).map((navName: string) => {
              const nav = props.navs[navName];
              if (nav.isHeaderMenu) {
                return (
                  <HeaderMenu
                    key={navName}
                    link={nav.path}
                    title={nav.title}
                    isSelected={getBasePathName(selectedNavPath) === nav.path}
                    onClick={props.onClick}
                  />
                );
              }
              return null;
            })}
          </FlexWrapper>
          <FlexWrapper>
            <ServerSelector />
            <LangaugeSelector />
          </FlexWrapper>
        </FlexWrapper>
      </NavList>
    </Navigation>
  );
});
