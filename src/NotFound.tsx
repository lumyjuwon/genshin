import React from 'react';
import styled from 'styled-components';
import { FlexWrapper, SquareImage, Footer } from './components';

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

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
  '@media screen and (max-width: 768px)': {
    padding: '10px 0 0'
  }
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
  alignItems: 'flex-start',
  '@media screen and (max-width: 1380px)': {
    padding: '100px 50px',
    height: '600px'
  },
  '@media screen and (max-width: 768px)': {
    padding: '0 10px',
    height: '600px'
  }
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
  @media screen and (max-width: 768px) {
    margin: 0 0 40px;
    &:after {
      content: '';
      border-top: 30px solid rgba(38, 38, 38, 0.8);
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 0 solid transparent;
      position: absolute;
      top: 97px;
      left: 150px;
    }
  }
`;

const Title = styled.div({
  fontSize: '70px',
  width: '100%',
  textAlign: 'left',
  fontWeight: 'bolder',
  '@media screen and (max-width: 1380px)': {
    fontSize: '60px'
  },
  '@media screen and (max-width: 768px)': {
    fontSize: '25px'
  }
});

const Content = styled.div({
  fontSize: '40px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

export default function NotFound() {
  return (
    <PositionFixed>
      <Container>
        <FlexWrapper styles={{ width: '100%', alignItems: 'center', small: { flexDirection: 'column-reverse' } }}>
          <>
            <PaimonImage>
              <SquareImage
                styles={{
                  width: '550px',
                  height: '700px',
                  medium: { width: '350px', height: '500px' },
                  small: { width: '250px', height: '360px' }
                }}
                src={require('./resources/images/mainscreen/paimon_404.png')}
              ></SquareImage>
            </PaimonImage>
            <PaimonComment>
              <CommentCard>
                <Title>404 NOT&nbsp;FOUND</Title>
                <Content>I can't find page...</Content>
              </CommentCard>
            </PaimonComment>
          </>
        </FlexWrapper>
      </Container>
      <Footer onClick={() => {}} />
    </PositionFixed>
  );
}
