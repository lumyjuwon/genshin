import React, { useRef } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Terms, About } from 'src/pages';
import { Header, Footer, TextBlockButton, TextUnderLineButton, ContentWrapper, TextCenterWrapper, FlexWrapper, SquareImage } from 'src/components';
import { trans, Lang } from './resources/languages';

const MainLogo = styled.div({
  fontSize: '30px',
  cursor: 'pointer',
  padding: '0 20px 0 0'
});

const CopyRight = styled.div({
  fontSize: "12px",
  "@media screen and (max-width: 768px)": {
    fontSize: "10px"
  }
});

const FooterText = styled.div({
  fontSize: "16px",
  "@media screen and (max-width: 768px)": {
    fontSize: "12px"
  }
});

const NavList = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width: 768px)": {
    display: "none",  
    "&.responsive": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "10vh",
      left: "0",
      backgroundColor: "#222",
      textAlign: "center",
      zIndex: 15
    }
  }
})

const ToggleIcon = styled.div({
  display: "none",
  fontSize: "30px",
  color: "#f1f2f3",
  "@media screen and (max-width: 768px)": {
    display: "block",
  }
})

function App() {

  const gacha = useRef<HTMLDivElement>(null);
  const party = useRef<HTMLDivElement>(null);

  const deleteSelected = () => {
    const target = document.querySelectorAll(".selected");
    target.forEach(child => {
      child.classList.remove("selected");
    })
  }

  const onNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    deleteSelected();
    ref.current && (ref.current.className += " selected");
  }

  const onToggleClick = () => {
    const target = document.querySelectorAll("#nav-list");
    target.forEach(child => {
      if(child.classList.contains("responsive")) {
        child.classList.remove("responsive");
      }
      else {
        child.className += " responsive";
      }
    })
  }

  return (
    <BrowserRouter>
      <Header>
        <>
        <Link to="/">
          <MainLogo onClick={() => deleteSelected()}>
            {trans(Lang.Main_Logo)}
          </MainLogo>
        </Link>
        <NavList id="nav-list">
          <Link to="/gacha">
            <TextBlockButton
              refProp={gacha}
              onClick={() => onNavClick(gacha)}
              styles={{ buttonStyles: { small: {width: "100vw"} }}}
            >
              {trans(Lang.Gacha)}
            </TextBlockButton>
          </Link>
          <Link to="/party">
            <TextBlockButton
              refProp={party}
              onClick={() => onNavClick(party)}
              styles={{ buttonStyles: { small: {width: "100vw"} }}}
            >
              {trans(Lang.Party)}
            </TextBlockButton>
          </Link>
        </NavList>
        <ToggleIcon onClick={() => onToggleClick()}>
          <i className="fas fa-bars"></i>
        </ToggleIcon>
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
          <CopyRight>Copyrightⓒ 2020</CopyRight>
          <FlexWrapper>
            <>
            <Link to="/policy">
              <TextUnderLineButton>
                <FooterText>{trans(Lang.Main_Privacy_Policy)}</FooterText>
              </TextUnderLineButton>
            </Link>
            <Link to="/terms">
              <TextUnderLineButton>
                <FooterText>{trans(Lang.Main_Terms_Of_Service)}</FooterText>
              </TextUnderLineButton>
            </Link>
            <Link to="/about">
              <TextUnderLineButton>
                <FooterText>About Us</FooterText>
              </TextUnderLineButton>
            </Link>
            </>
          </FlexWrapper>
        </>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
