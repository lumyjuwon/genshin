import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { GachaScreen, ElementalResonanceScreen } from "src/pages";
import { Header, Footer, TextBlockButton, TextInLineButton } from "src/components";

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
            <TextBlockButton href="/gacha">Gacha</TextBlockButton>
            <TextBlockButton href="/elmreson">Resonance</TextBlockButton>
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
              <TextInLineButton href="/policy">Privacy Policy</TextInLineButton>
              <TextInLineButton href="/terms">Terms of Service</TextInLineButton>
              <TextInLineButton href="mailto:lumyjuwon@gmail.com">Contact Us</TextInLineButton>
            </>
          </Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
