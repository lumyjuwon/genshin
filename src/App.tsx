import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Notice, ItemScreen, CharacterScreen } from 'src/pages';
import { Header, Footer } from 'src/components';
import { trans, Lang } from './resources/languages';
import NotFound from './NotFound';
import { Navs } from './components/header/HeaderNavigation';
import { useTranslation } from 'react-i18next';
import { RootState } from './redux/rootReducer';
import { useSelector } from 'react-redux';

function App() {
  const pages: Navs = {
    gacha: { isHeaderMenu: true, path: '/gacha', title: trans(Lang.Gacha), component: GachaScreen },
    party: {
      isHeaderMenu: true,
      path: '/party',
      title: trans(Lang.Party),
      component: PartyScreen
    },
    // map: { path: '/map', title: trans(Lang.Map), content: "D", component: MapScreen },
    character: {
      isHeaderMenu: true,
      path: '/character',
      title: trans(Lang.Character),
      component: CharacterScreen
    },
    item: {
      isHeaderMenu: true,
      path: '/item',
      title: trans(Lang.Item),
      component: ItemScreen
    },
    policy: {
      isHeaderMenu: false,
      path: '/policy',
      title: 'Policy',
      component: Policy
    },
    notice: {
      isHeaderMenu: false,
      path: '/notice',
      title: 'Notice',
      component: Notice
    },
    '*': {
      isHeaderMenu: false,
      path: '*',
      title: 'NotFound',
      component: NotFound
    }
  };

  useSelector<RootState, any>((state) => state.common.server);
  useTranslation();

  return (
    <BrowserRouter>
      <Header navs={pages} />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        {Object.keys(pages).map((page) => {
          return <Route key={page} path={pages[page].path} component={pages[page].component} />;
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
