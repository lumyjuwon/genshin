import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
          <MainLogo>
            <Link to="/">Genshin Simul</Link>
          </MainLogo>
          <TextBlockButton>
            <Link to="/gacha">{trans(Lang.Gacha)}</Link>
          </TextBlockButton>
          <TextBlockButton>
            <Link to="/party">{trans(Lang.Party)}</Link>
          </TextBlockButton>
        </>
      </Header>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/gacha" component={GachaScreen} />
        <Route path="/party" component={PartyScreen} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
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
