import React, { RefObject, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Notice, MapScreen } from 'src/pages';
import { Header, TextBlockButton, FlexWrapper, RoundImage, Footer, FocusWrapper } from 'src/components';
import { LangaugeSelector } from './LangaugeSelector';
import { trans, Lang, LangCode, getCurrentLanguage } from './resources/languages';
import NotFound from './NotFound';
import { isDev } from './utils';
import { HeaderNavigation } from './components/HeaderNavigation';

const MainLogo = styled.div({
  fontSize: '30px',
  cursor: 'pointer',
  padding: '0 20px 0 0',
  width: 'max-content',
  fontWeight: 'bolder',
  margin: '0 0 0 7px',
  '@media screen and (max-width: 768px)': {
    fontSize: '18px',
    margin: '0 0 0 4px'
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

const ToggleIcon = styled.div({
  display: 'none',
  fontSize: '30px',
  color: '#f1f2f3',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const HeaderNav = styled.div({
  transition: '.2s ease-out',
  '&:hover': {
    textShadow: '0 0 8px #f1f2f3, 0 0 15px #f1f2f3, 0 0 20px #f1f2f3',
    boxShadow: 'inset 0 -2px 0 #f1f2f3'
  },
  '&.selected': {
    boxShadow: 'inset 0 -2px 0 #f1f2f3'
  }
});

function App() {
  const [isHeaderNavVisible, setIsHeaderNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navList = useRef<HTMLDivElement>(null);
  const gacha = useRef<HTMLDivElement>(null);
  const party = useRef<HTMLDivElement>(null);
  const map = useRef<HTMLDivElement>(null);
  let selectedNav = useRef<HTMLDivElement>(null);
  const headerNavRefs = {
    selectedNav,
    navList,
    gacha,
    party,
    map
  };

  console.log(selectedNav);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function onToggleClick() {
    setIsHeaderNavVisible(!isHeaderNavVisible);
  }

  function deleteSelected(ref: React.RefObject<HTMLDivElement>) {
    console.log('before remove', ref.current?.textContent);
    ref.current?.classList.remove('selected');
    console.log('after remove', ref.current?.textContent);
  }

  function onCardClick(ref: React.RefObject<HTMLDivElement>) {
    deleteSelected(selectedNav);
    selectedNav = ref;
    selectedNav.current?.classList.add('selected');

    window.scrollTo(0, 0);
  }

  function callbackSetIsHeaderNavVisible(bool: boolean) {
    setIsHeaderNavVisible(bool);
  }

  function callbackSetSelectedNav(ref: React.RefObject<HTMLDivElement>) {
    console.log('callback', ref.current?.textContent);
    selectedNav = ref;
    console.log('set selected', selectedNav.current?.textContent);
  }

  return (
    <BrowserRouter>
      <Header>
        <>
          <Link to="/">
            <div
              onClick={() => {
                deleteSelected(selectedNav);
              }}
            >
              <FlexWrapper>
                <>
                  <RoundImage
                    styles={{ width: '50px', height: '50px', small: { width: '40px', height: '40px' } }}
                    src={require('./resources/images/mainscreen/logo.png')}
                  />
                  <MainLogo>{trans(Lang.Main_Logo)}</MainLogo>
                </>
              </FlexWrapper>
            </div>
          </Link>
          <div id="nav-list">
            <ToggleIcon onClick={() => onToggleClick()}>
              <i className="fas fa-bars"></i>
            </ToggleIcon>
            <NavList>
              {windowWidth < 768 ? (
                <FocusWrapper ref={navList} visible={isHeaderNavVisible} setVisible={callbackSetIsHeaderNavVisible}>
                  <HeaderNavigation
                    refs={headerNavRefs}
                    onDelete={deleteSelected}
                    onToggle={onToggleClick}
                    setSelectedNav={callbackSetSelectedNav}
                  />
                </FocusWrapper>
              ) : (
                <HeaderNavigation
                  refs={headerNavRefs}
                  onDelete={deleteSelected}
                  onToggle={onToggleClick}
                  setSelectedNav={callbackSetSelectedNav}
                />
              )}
            </NavList>
          </div>
        </>
      </Header>
      <Switch>
        <Route exact path="/" render={() => <MainScreen gacha={gacha} party={party} onNavClick={onCardClick} />} />
        <Route path="/gacha" component={GachaScreen} />
        <Route path="/party" component={PartyScreen} />
        <Route path="/map" component={MapScreen} />
        <Route path="/policy" component={Policy} />
        <Route path="/notice" component={Notice} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer selectedNav={selectedNav} onClick={() => deleteSelected(selectedNav)} />
    </BrowserRouter>
  );
}

export default App;
