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

const P = styled.p({
  fontSize: '18px',
  margin: '10px 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

export function Notice() {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <Container>
      <Wrapper>
        <H1>{trans(Lang.Main_Notice)}</H1>
        <P>{trans(Lang.Notice_Content1)}</P>
        <P>{trans(Lang.Notice_Content2)}</P>
        <P>{trans(Lang.Notice_Content3)}</P>
      </Wrapper>
    </Container>
  );
}
