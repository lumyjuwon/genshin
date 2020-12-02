import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from 'src/components';
import { RoundImage } from '../image/RoundImage';

const Container = styled.div({
  margin: '40px 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  flexDirection: 'column',
  backgroundColor: '#363738',
  borderRadius: '20px'
});
const Header = styled.div({
  width: '100%'
});

const Name = styled.div({
  marginLeft: '10px',
  color: '#ce9178'
});

const Title = styled.div({
  fontSize: '20px',
  fontWeight: 'bold'
});

const Line = styled.hr({
  width: '100%'
});

const Content = styled.div({
  width: '100%',
  marginTop: '20px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden'
});

const GetMemberStatus = styled.div<{ getMember: boolean }>((props) => {
  return {
    fontSize: '14px',
    borderRadius: '6px',
    padding: '2px',
    marginLeft: '10px',
    color: props.getMember ? '#00ff00' : '#ff0000',
    border: props.getMember ? '1px solid #00ff00' : '1px solid #ff0000'
  };
});

interface Props {
  profileImage: string;
  name: string;
  title: string;
  content: string | JSX.Element;
  getMember: boolean;
}

export function TimeLineBox(props: Props) {
  return (
    <Container>
      <Header>
        <FlexWrapper styles={{ width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
          <FlexWrapper>
            <RoundImage src={props.profileImage} styles={{ width: '35px', height: '35px', borderRadius: '50%' }} />
            <Name>{props.name}</Name>
          </FlexWrapper>
          <FlexWrapper styles={{ margin: '15px 0 0' }}>
            <Title>{props.title}</Title>
            <GetMemberStatus getMember={props.getMember}>{props.getMember ? '완료' : '구인중'}</GetMemberStatus>
          </FlexWrapper>
        </FlexWrapper>
      </Header>
      <Line />
      <Content>{props.content}</Content>
    </Container>
  );
}
