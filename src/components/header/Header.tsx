import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { HeaderNavigation, Navs } from './HeaderNavigation';
import { MainLogo } from './MainLogo';
import { useHandleClickOutside } from 'src/components';

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
  '@media screen and (max-width: 1380px)': {
    maxWidth: '90vw'
  },
  '@media screen and (max-width: 768px)': {
    justifyContent: 'space-between',
    margin: '0',
    minWidth: '100%',
    padding: '0 10px'
  }
});

const ToggleIcon = styled.div({
  display: 'none',
  fontSize: '30px',
  color: '#f1f2f3',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

interface Props {
  navs: Navs;
}

export function Header(props: Props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useHandleClickOutside(navigationRef, isNavVisible, onClickNavOrOutside);

  function onClickNavOrOutside() {
    setIsNavVisible(false);
  }

  return (
    <HeaderOuter>
      <HeaderInner>
        <MainLogo />
        {windowWidth < 768 ? (
          isNavVisible && <HeaderNavigation ref={navigationRef} navs={props.navs} onClick={onClickNavOrOutside} />
        ) : (
          <HeaderNavigation navs={props.navs} />
        )}
        <ToggleIcon
          onClick={() => {
            setIsNavVisible(!isNavVisible);
          }}
        >
          <i className="fas fa-bars"></i>
        </ToggleIcon>
      </HeaderInner>
    </HeaderOuter>
  );
}
