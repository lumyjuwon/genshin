import React, { RefObject, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link, useLocation, useHistory } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Notice, MapScreen, CharacterScreen } from 'src/pages';
import { Header, FlexWrapper, RoundImage, Footer, FocusWrapper, HeaderNavigation } from 'src/components';
import { trans, Lang } from './resources/languages';
import NotFound from './NotFound';
import { Navs } from './components/header/HeaderNavigation';
import { fetchIpApi } from './api';
import { useTranslation } from 'react-i18next';
import { RootState } from './redux/rootReducer';
import { useSelector } from 'react-redux';

const ToggleIcon = styled.div({
  display: 'none',
  fontSize: '30px',
  color: '#f1f2f3',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const Navigation = styled.div({
  flaot: 'right',
  width: '100%',
  '@media screen and (max-width: 768px)': {
    textAlign: 'right'
  }
});

function App() {
  const [isHeaderNavVisible, setIsHeaderNavVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const pages: Navs = {
    gacha: { path: '/gacha', title: trans(Lang.Gacha), component: GachaScreen },
    party: { path: '/party', title: trans(Lang.Party), component: PartyScreen },
    map: { path: '/map', title: trans(Lang.Map), component: MapScreen },
    character: { path: '/character', title: trans(Lang.Character), component: CharacterScreen }
  };
  useTranslation();

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // });

  return (
    <BrowserRouter>
      <Header navs={pages} />
      <Switch>
        <Route exact path='/' component={MainScreen} />
        {Object.keys(pages).map((page) => {
          return <Route key={page} path={pages[page].path} component={pages[page].component} />;
        })}
        <Route path='/policy' component={Policy} />
        <Route path='/notice' component={Notice} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
