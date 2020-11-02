import React from 'react';
import styled from 'styled-components';
import { ContentWrapper, FlexWrapper, SquareImage, Footer } from './components';

const PositionFixed = styled.div({
  zIndex: 9999,
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${require('./resources/images/mainscreen/main.jpg')})`,
  userSelect: 'none',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column'
});

const PaimonImage = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px 0 0;
`;

const PaimonComment = styled.div({
  flex: '1 1',
  padding: '20px 50px',
  display: 'flex',
  height: '800px',
  justifyContnet: 'flex-start',
  alignItems: 'flex-start'
});

const CommentCard = styled.div`
  display: flex;
  margin: 50px 0;
  position: relative;
  flex-direction: column;
  width: fit-content;
  background-color: rgba(38, 38, 38, 0.8);
  border-radius: 40px;
  padding: 20px;
  &:after {
    content: '';
    border-top: 40px solid rgba(38, 38, 38, 0.8);
    border-left: 60px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 0 solid transparent;
    position: absolute;
    top: 70px;
    left: -60px;
  }
`;

const Title = styled.div({
  fontSize: '80px',
  width: '100%',
  textAlign: 'left',
  fontWeight: 'bolder'
});

const Content = styled.div({
  fontSize: '40px',
  textAlign: 'center'
});

export default function NotFound() {
  return (
    <PositionFixed>
      <ContentWrapper>
        <FlexWrapper styles={{ width: '100%', alignItems: 'flex-start' }}>
          <>
            <PaimonImage>
              <SquareImage
                styles={{ width: '550px', height: '700px' }}
                src={require('./resources/images/mainscreen/paimon_404.png')}
              ></SquareImage>
            </PaimonImage>
            <PaimonComment>
              <CommentCard>
                <Title>404 NOT FOUND</Title>
                <Content>I can't find page...</Content>
              </CommentCard>
            </PaimonComment>
          </>
        </FlexWrapper>
      </ContentWrapper>
      <Footer />
    </PositionFixed>
  );
}
