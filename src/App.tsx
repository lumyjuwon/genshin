import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen } from 'src/pages';
import { Header, Footer, TextBlockButton, TextUnderLineButton, ContentWrapper, TextCenterWrapper } from 'src/components';
import { trans, Lang } from './resources/languages';

const Container = styled.div({});

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
      <Container>
        <Switch>
          <Route path="/gacha" component={GachaScreen} />
          <Route path="/party" component={PartyScreen} />
          {/* root path must be the very bottom */}
          <Route path="/" component={MainScreen} />
        </Switch>
      </Container>
      <Footer>
        <>
          <div style={{ fontSize: '12px' }}>Copyrightⓒ 2020</div>
          <TextUnderLineButton href="/policy">Privacy Policy</TextUnderLineButton>
          <TextUnderLineButton href="/terms">Terms of Service</TextUnderLineButton>
          <TextUnderLineButton href="mailto:lumyjuwon@gmail.com">Contact Us</TextUnderLineButton>
        </>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
