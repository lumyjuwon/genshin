import React, { useState, useEffect } from 'react';
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
  border: '2px solid #f1f2f3',
  userSelect: 'none'
});

const PostContainer = styled.div({
  width: '400px',
  margin: '10px auto'
});

interface PostData {
  [key: string]: {
    profileImage: string;
    name: string;
    title: string;
    content: string;
    getMember: boolean;
  };
}

export function CooperationScreen() {
  const [postData, setPostData] = useState<PostData>({});
  const dataKeys = Object.keys(postData);

  useEffect(() => {
    fetch('/cooperation')
      .then((res) => res.json())
      .then(
        (data) => setPostData(data),
        () => console.log(postData)
      );
  }, []);

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
            {dataKeys.map((key) => {
              return (
                <TimeLineBox
                  profileImage={postData[key].profileImage}
                  name={postData[key].name}
                  title={postData[key].title}
                  content={postData[key].content}
                  getMember={postData[key].getMember}
                />
              );
            })}
          </PostContainer>
        </Inner>
      </ContentWrapper>
    </>
  );
}
