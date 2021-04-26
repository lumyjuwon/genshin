import React, { useEffect } from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';

const Container = styled.div({
  minHeight: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Wrapper = styled.div({
  padding: '10px 0',
  width: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media screen and (max-width: 768px)': {
    padding: '0 20px'
  }
});

const H1 = styled.div({
  fontSize: '30px',
  fontWeight: 'bolder',
  margin: '0 0 10px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '22px'
  }
});

const H2 = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  margin: '10px 0',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '18px'
  }
});

const P = styled.p({
  fontSize: '18px',
  margin: '10px 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const Li = styled.li({
  listStyleType: 'circle',
  textIndent: '20px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

export function Policy() {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <Container>
      <Wrapper>
        <H1>{trans(Lang.Policy_Title)}</H1>
        <P>{trans(Lang.Policy_Intro_1)}</P>
        <P>{trans(Lang.Policy_Intro_2)}</P>
        <P>{trans(Lang.Policy_Intro_3)}</P>

        <H2>{trans(Lang.Policy_Consent)}</H2>
        <P>{trans(Lang.Policy_Consent_Content)}</P>

        <H2>{trans(Lang.Policy_Collect)}</H2>
        <P>{trans(Lang.Policy_Collect_Content_1)}</P>
        <P>{trans(Lang.Policy_Collect_Content_2)}</P>
        <P>{trans(Lang.Policy_Collect_Content_3)}</P>

        <H2>{trans(Lang.Policy_Use)}</H2>
        <P>{trans(Lang.Policy_Use_Content)}</P>
        <ul>
          <Li>{trans(Lang.Policy_Use_List1)}</Li>
          <Li>{trans(Lang.Policy_Use_List2)}</Li>
          <Li>{trans(Lang.Policy_Use_List3)}</Li>
          <Li>{trans(Lang.Policy_Use_List4)}</Li>
          <Li>{trans(Lang.Policy_Use_List5)}</Li>
          <Li>{trans(Lang.Policy_Use_List6)}</Li>
          <Li>{trans(Lang.Policy_Use_List7)}</Li>
        </ul>

        <H2>{trans(Lang.Policy_Log)}</H2>
        <P>{trans(Lang.Policy_Log_Content)}</P>

        <H2>{trans(Lang.Policy_Ad)}</H2>
        <P>{trans(Lang.Policy_Ad_Content1)}</P>
        <P>{trans(Lang.Policy_Ad_Content2)}</P>
        <P>{trans(Lang.Policy_Ad_Content3)}</P>

        <H2>{trans(Lang.Policy_Third)}</H2>
        <P>{trans(Lang.Policy_Third_Content1)}</P>
        <P>{trans(Lang.Policy_Third_Content2)}</P>

        <H2>{trans(Lang.Policy_CCPA_Content1)}</H2>
        <P>{trans(Lang.Policy_CCPA_Content2)}</P>
        <P>{trans(Lang.Policy_CCPA_Content3)}</P>
        <P>{trans(Lang.Policy_CCPA_Content4)}</P>
        <P>{trans(Lang.Policy_CCPA_Content5)}</P>
        <P>{trans(Lang.Policy_CCPA_Content6)}</P>

        <H2>{trans(Lang.Policy_GDPR)}</H2>
        <P>{trans(Lang.Policy_GDPR_Content1)}</P>
        <P>{trans(Lang.Policy_GDPR_Content2)}</P>
        <P>{trans(Lang.Policy_GDPR_Content3)}</P>
        <P>{trans(Lang.Policy_GDPR_Content4)}</P>
        <P>{trans(Lang.Policy_GDPR_Content5)}</P>
        <P>{trans(Lang.Policy_GDPR_Content6)}</P>
        <P>{trans(Lang.Policy_GDPR_Content7)}</P>
        <P>{trans(Lang.Policy_GDPR_Content8)}</P>

        <H2>{trans(Lang.Policy_Children)}</H2>
        <P>{trans(Lang.Policy_Children_Content1)}</P>
        <P>{trans(Lang.Policy_Children_Content2)}</P>
      </Wrapper>
    </Container>
  );
}
