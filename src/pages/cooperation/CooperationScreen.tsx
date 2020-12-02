import React from 'react';
import styled from 'styled-components';

import { PageHelmet, ContentWrapper, FlexWrapper, TimeLineBox, RoundImage } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

const Inner = styled.div({
  width: '1200px',
  margin: '0 auto'
});

const Button = styled.div({
  width: '300px',
  padding: '20px',
  fontSize: '25px',
  textAlign: 'center',
  margin: '0 20px',
  borderRadius: '12px',
  border: '2px solid #f1f2f3'
});

const PostContainer = styled.div({
  width: '400px',
  margin: '10px auto'
});

export function CooperationScreen() {
  const mockUpData = [
    {
      profileImage: require('../../resources/images/characters/Mona.png'),
      name: 'testName',
      title: 'mockUpTitle',
      content: '비경 팟 구함',
      getMember: false
    },
    {
      profileImage: require('../../resources/images/characters/Mona.png'),
      name: 'testName2',
      title: 'clamp test',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      getMember: true
    }
  ];

  return (
    <>
      <PageHelmet title={trans(Lang.Cooperation)} description={trans(Lang.CooperationDesc)} />
      <ContentWrapper>
        <Inner>
          <FlexWrapper>
            <Button>수정 파티</Button>
            <Button>비경 파티</Button>
            <Button>기타</Button>
          </FlexWrapper>
          <PostContainer>
            {mockUpData.map((data) => {
              return (
                <TimeLineBox
                  profileImage={data.profileImage}
                  name={data.name}
                  title={data.title}
                  content={data.content}
                  getMember={data.getMember}
                />
              );
            })}
          </PostContainer>
        </Inner>
      </ContentWrapper>
    </>
  );
}
