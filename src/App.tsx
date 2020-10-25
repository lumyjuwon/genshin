import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Terms, About } from 'src/pages';
import { Header, Footer, TextBlockButton, TextUnderLineButton, ContentWrapper, TextCenterWrapper, FlexWrapper } from 'src/components';
import { trans, Lang } from './resources/languages';

const MainLogo = styled.a({
  fontSize: '30px',
  padding: '20px 15px 20px 0px',
  cursor: 'pointer'
});

function App() {
  return (
    <BrowserRouter>
      <Header>
        <>
          <MainLogo href="/">Genshin Simul</MainLogo>
          <TextBlockButton href="/gacha">{trans(Lang.Gacha)}</TextBlockButton>
          <TextBlockButton href="/party">{trans(Lang.Party)}</TextBlockButton>
        </>
      </Header>
      <Switch>
        <Route path="/gacha" component={GachaScreen} />
        <Route path="/party" component={PartyScreen} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
        {/* root path must be the very bottom */}
        <Route path="/" component={MainScreen} />
      </Switch>
      <Footer>
        <>
          <div style={{ fontSize: '12px' }}>Copyrightⓒ 2020</div>
          <FlexWrapper>
            <>
            <TextUnderLineButton href="/policy">Privacy Policy</TextUnderLineButton>
            <TextUnderLineButton href="/terms">Terms of Service</TextUnderLineButton>
            <TextUnderLineButton href="/about">About Us</TextUnderLineButton>
            </>
          </FlexWrapper>
        </>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
