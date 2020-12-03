import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Lang, trans } from 'src/resources/languages';
import { RoundImage } from '../image/RoundImage';
import { FlexWrapper } from '../wrapper/FlexWrapper';

const Logo = styled.div({
  fontSize: '30px',
  cursor: 'pointer',
  padding: '0 20px 0 0',
  width: 'max-content',
  fontWeight: 'bolder',
  margin: '0 0 0 7px',
  '@media screen and (max-width: 1380px)': {
    fontSize: '22px'
  },
  '@media screen and (max-width: 768px)': {
    fontSize: '18px',
    margin: '0 0 0 4px'
  }
});

export function MainLogo() {
  return (
    <Link to="/">
      <FlexWrapper>
        <>
          <RoundImage
            styles={{ width: '50px', height: '50px', small: { width: '40px', height: '40px' } }}
            src={require('../../resources/images/mainscreen/logo.png')}
          />
          <Logo>{trans(Lang.Main_Logo)}</Logo>
        </>
      </FlexWrapper>
    </Link>
  );
}
