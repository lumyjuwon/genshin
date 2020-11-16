import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Notice, MapScreen, CharacterScreen } from 'src/pages';
import { Header, Footer } from 'src/components';
import { trans, Lang } from './resources/languages';
import NotFound from './NotFound';
import { Navs } from './components/header/HeaderNavigation';
import { useTranslation } from 'react-i18next';
import { RootState } from './redux/rootReducer';
import { useSelector } from 'react-redux';

const pages: Navs = {
  main: {
    path: '/',
    title: 'Genshin Impact Simul',
    content: 'Genshin Impact Simulator with Wish System, Party, Character!',
    component: MainScreen
  },
  gacha: { path: '/gacha', title: 'Gacha', content: 'Test Your Luck!', component: GachaScreen },
  party: {
    path: '/party',
    title: 'Party',
    content: 'Elemental Resonance and Character Equipment System',
    component: PartyScreen
  },
  // map: { path: '/map', title: trans(Lang.Map), content: "D", component: MapScreen },
  character: {
    path: '/character',
    title: 'Character',
    content: 'Genshin Impact Simulator with Wish System, Party, Character!',
    component: CharacterScreen
  }
};

function App() {
  useSelector<RootState, any>((state) => state.common.server);
  useTranslation();

  return (
    <BrowserRouter>
      <Header navs={pages} />
      <Switch>
        {Object.keys(pages).map((page) => {
          if (page === 'main') {
            return <Route exact key={page} path={pages[page].path} component={pages[page].component} />;
          }
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
