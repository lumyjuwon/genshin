import React from "react";
import styled from "styled-components";
import { BrowserRouter, Link, Route } from "react-router-dom";

import { Header, Footer } from "src/components";

const Container = styled.div({});

const ContentContainer = styled.div({});

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <ContentContainer></ContentContainer>
        <Footer></Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
