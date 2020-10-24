import React from 'react';
import { RoundImageButton } from 'src/components';
import { RegexColorText } from 'src/components/text/RegexColorText';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px'
});

const DiamondSquare = styled.div({
  position: 'relative',
  width: '0px',
  height: '0px',
  border: '50px solid transparent',
  borderBottomColor: 'red',
  top: '-50px'
});

const TopContainer = styled.div({});

const ContentContainer = styled.div({});

interface Props {
  activeElements: Map<string, number>;
  isActive?: boolean;
}

export function ElementEffectSummary(props: Props) {
  return (
    <Container>
      <RegexColorText
        text={`물 원소의 부착 지속 시간이 40% 감소한다. 초전도, 과부하, 감전 반응을 일으키면 100%의 확률로 번개 원소 입자가 1개 생성된다.\n재사용 대기시간: 5초`}
        regex={/\d+%/g}
        color={'blue'}
      />
    </Container>
  );
}
