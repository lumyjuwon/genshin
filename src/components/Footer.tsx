import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TextUnderLineButton, FlexWrapper } from 'src/components';
import { trans, Lang } from 'src/resources/languages';

const FooterDiv = styled.footer({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#444546',
  borderTop: '1px solid #616263',
  minHeight: '10vh',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    padding: '15px 10px'
  }
});

const ContactUs = styled.div({
  verticalAlign: 'baseline'
});

const FooterText = styled.div({
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px'
  }
});

const CopyRight = styled.div({
  fontSize: '12px',
  '@media screen and (max-width: 768px)': {
    fontSize: '10px'
  }
});

export function Footer() {
  return (
    <FooterDiv>
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
            <ContactUs>
              <TextUnderLineButton>
                <a href="mailto:genshinsimul@gmail.com">
                  <FooterText>Contact Us</FooterText>
                </a>
              </TextUnderLineButton>
            </ContactUs>
          </>
        </FlexWrapper>
      </>
    </FooterDiv>
  );
}
