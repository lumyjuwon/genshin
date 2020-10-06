import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Header, Footer, TextLinkButton } from "src/components";
import { GachaScreen } from "src/pages";

const Container = styled.div({});

const ContentContainer = styled.div({});

function App() {

  const MainLogo = styled.a({
    fontSize: "30px",
    padding: "20px 15px",
    cursor: "pointer"
  })

  return (
    <BrowserRouter>
      <Container>
        <Header>
          <MainLogo href="/">
            Genshin Simul
          </MainLogo>
          <TextLinkButton href="/gacha">Gacha</TextLinkButton>
          <TextLinkButton href="/character">Character</TextLinkButton>
          <TextLinkButton href="/weapon">Weapon</TextLinkButton>
        </Header>
        <ContentContainer>
          <Switch>
            <Route path="/gacha" component={GachaScreen} />
          </Switch>
        </ContentContainer>
        <Footer>
          This is Footer
        </Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
