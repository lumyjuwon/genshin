import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GachaScreen, ElementalResonanceScreen } from "src/pages";
import { Header, Footer, TextBoxButton, TextButton } from "src/components";

const Container = styled.div({});

const ContentContainer = styled.div({});

function App() {

  const MainLogo = styled.a({
    fontSize: "30px",
    padding: "20px 15px 20px 0px",
    cursor: "pointer"
  })

  return (
    <BrowserRouter>
      <Container>
        <Header>
          <>
            <MainLogo href="/">
              Genshin Simul
            </MainLogo>
            <TextBoxButton href="/gacha">Gacha</TextBoxButton>
            <TextBoxButton href="/elmreson">Resonance</TextBoxButton>
          </>
        </Header>
        <ContentContainer>
          <Switch>
            <Route path="/gacha" component={GachaScreen} />
            <Route path="/elmreson" component={ElementalResonanceScreen} />
          </Switch>
        </ContentContainer>
          <Footer>
            <>
              <div style={{fontSize: "12px"}}>
                Copyrightⓒ 2020
              </div>
              <TextButton href="/policy">Privacy Policy</TextButton>
              <TextButton href="/terms">Terms of Service</TextButton>
              <TextButton href="mailto:lumyjuwon@gmail.com">Contact Us</TextButton>
            </>
          </Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
