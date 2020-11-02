import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { GachaScreen, PartyScreen, MainScreen, Policy, Terms } from 'src/pages';
import { Header, TextBlockButton, FlexWrapper, RoundImage, Footer } from 'src/components';
import { LangaugeSelector } from './LangaugeSelector';
import { trans, Lang, LangCode, getCurrentLanguage } from './resources/languages';
import NotFound from './NotFound';

const MainLogo = styled.div({
  fontSize: '30px',
  cursor: 'pointer',
  padding: '0 20px 0 0',
  width: 'max-content',
  fontWeight: 'bolder',
  margin: '0 0 0 7px'
});

const NavList = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  '@media screen and (max-width: 768px)': {
    display: 'none',
    '&.responsive': {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '10vh',
      left: '0',
      backgroundColor: '#111',
      textAlign: 'center',
      zIndex: 15
    }
  }
});

const ToggleIcon = styled.div({
  display: 'none',
  fontSize: '30px',
  color: '#f1f2f3',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const onToggleClick = () => {
  const target = document.querySelectorAll('#nav-list');
  target.forEach((child) => {
    if (child.classList.contains('responsive')) {
      child.classList.remove('responsive');
    } else {
      child.className += ' responsive';
    }
  });
};

function App() {
  const [langCode, setLangCode] = useState<LangCode>(getCurrentLanguage());
  const gacha = useRef<HTMLDivElement>(null);
  const party = useRef<HTMLDivElement>(null);

  const deleteSelected = () => {
    const target = document.querySelectorAll('.selected');
    target.forEach((child) => {
      child.classList.remove('selected');
    });
  };

  const onNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    deleteSelected();
    ref.current && (ref.current.className += ' selected');
    if (window.innerWidth <= 768) {
      onToggleClick();
    }
  };

  return (
    <BrowserRouter>
      <Header>
        <>
          <Link to="/">
            <FlexWrapper>
              <>
                <RoundImage styles={{ width: '50px', height: '50px' }} src={require('./resources/images/mainscreen/logo.png')} />
                <MainLogo onClick={() => deleteSelected()}>{trans(Lang.Main_Logo)}</MainLogo>
              </>
            </FlexWrapper>
          </Link>
          <NavList id="nav-list">
            <FlexWrapper styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column' } }}>
              <>
                <FlexWrapper styles={{ small: { flexDirection: 'column', width: '100%' } }}>
                  <>
                    <Link to="/gacha">
                      <TextBlockButton
                        refProp={gacha}
                        onClick={() => onNavClick(gacha)}
                        styles={{ buttonStyles: { small: { width: '95vw' } } }}
                      >
                        {trans(Lang.Gacha)}
                      </TextBlockButton>
                    </Link>
                    <Link to="/party">
                      <TextBlockButton
                        refProp={party}
                        onClick={() => onNavClick(party)}
                        styles={{ buttonStyles: { small: { width: '95vw' } } }}
                      >
                        {trans(Lang.Party)}
                      </TextBlockButton>
                    </Link>
                  </>
                </FlexWrapper>
                <LangaugeSelector
                  defaultValue={langCode}
                  onCallBack={(_langCode: LangCode) => {
                    setLangCode(_langCode);
                  }}
                />
              </>
            </FlexWrapper>
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
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
