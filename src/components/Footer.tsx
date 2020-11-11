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

interface Props {
  onClick: Function;
  selectedNav?: React.RefObject<HTMLDivElement>;
}

export function Footer(props: Props) {
  return (
    <FooterDiv>
      <>
        <CopyRight>Copyrightⓒ 2020</CopyRight>
        <FlexWrapper>
          <>
            <Link to="/policy">
              <div onClick={() => props.onClick(props.selectedNav)}>
                <TextUnderLineButton>
                  <FooterText>{trans(Lang.Main_Privacy_Policy)}</FooterText>
                </TextUnderLineButton>
              </div>
            </Link>
            <Link to="/notice">
              <div onClick={() => props.onClick(props.selectedNav)}>
                <TextUnderLineButton>
                  <FooterText>{trans(Lang.Main_Notice)}</FooterText>
                </TextUnderLineButton>
              </div>
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
