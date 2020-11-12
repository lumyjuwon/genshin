import React, { RefObject, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { Header, TextBlockButton, FlexWrapper, RoundImage, Footer, FocusWrapper } from 'src/components';
import { LangaugeSelector } from '../LangaugeSelector';
import { trans, Lang, LangCode, getCurrentLanguage } from '../resources/languages';
import { isDev } from '../utils';

const HeaderNav = styled.div({
  transition: '.2s ease-out',
  '&:hover': {
    textShadow: '0 0 8px #f1f2f3, 0 0 15px #f1f2f3, 0 0 20px #f1f2f3',
    boxShadow: 'inset 0 -2px 0 #f1f2f3'
  },
  '&.selected': {
    boxShadow: 'inset 0 -2px 0 #f1f2f3'
  }
});

interface Props {
  refs: {
    selectedNav: React.RefObject<HTMLDivElement>;
    navList: React.RefObject<HTMLDivElement>;
    gacha: React.RefObject<HTMLDivElement>;
    party: React.RefObject<HTMLDivElement>;
    map: React.RefObject<HTMLDivElement>;
  };
  onDelete: Function;
  onToggle: Function;
  setSelectedNav: Function;
}

export function HeaderNavigation(props: Props) {
  const [langCode, setLangCode] = useState<LangCode>(getCurrentLanguage());

  function onNavClick(ref: React.RefObject<HTMLDivElement>) {
    console.log('clicked ref', ref.current?.textContent);
    props.onDelete(props.refs.selectedNav);
    props.setSelectedNav(ref);
    // why this always undefined??...
    console.log(props.refs.selectedNav.current?.textContent);
    props.refs.selectedNav.current?.classList.add('selected');

    if (window.innerWidth <= 768) {
      props.onToggle();
    }
  }

  return (
    <FlexWrapper styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column' } }}>
      <>
        <FlexWrapper styles={{ small: { flexDirection: 'column', width: '100%' } }}>
          <>
            <Link to="/gacha">
              <HeaderNav ref={props.refs.gacha}>
                <TextBlockButton onClick={() => onNavClick(props.refs.gacha)} styles={{ buttonStyles: { small: { width: '95vw' } } }}>
                  {trans(Lang.Gacha)}
                </TextBlockButton>
              </HeaderNav>
            </Link>
            <Link to="/party">
              <HeaderNav ref={props.refs.party}>
                <TextBlockButton onClick={() => onNavClick(props.refs.party)} styles={{ buttonStyles: { small: { width: '95vw' } } }}>
                  {trans(Lang.Party)}
                </TextBlockButton>
              </HeaderNav>
            </Link>
            {isDev() && (
              <Link to="/map">
                <HeaderNav ref={props.refs.map}>
                  <TextBlockButton onClick={() => onNavClick(props.refs.map)} styles={{ buttonStyles: { small: { width: '95vw' } } }}>
                    {trans(Lang.Map)}
                  </TextBlockButton>
                </HeaderNav>
              </Link>
            )}
          </>
        </FlexWrapper>
        <LangaugeSelector
          defaultValue={langCode}
          onCallBack={(_langCode: LangCode) => {
            setLangCode(_langCode);
            props.onToggle();
          }}
        />
      </>
    </FlexWrapper>
  );
}
