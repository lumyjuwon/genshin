import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Header, Footer } from "src/components";
import { GachaScreen } from "src/pages";

const Container = styled.div({});

const ContentContainer = styled.div({});

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <ContentContainer>
          <Switch>
            <Route path="/gacha" component={GachaScreen} />
          </Switch>
        </ContentContainer>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
