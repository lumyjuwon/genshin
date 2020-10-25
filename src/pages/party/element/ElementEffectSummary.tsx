import React from 'react';
import { RegexColorText } from 'src/components/text/RegexColorText';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px'
});

interface Props {
  activeElements: Map<string, number>;
  isActive?: boolean;
}

export function ElementEffectSummary(props: Props) {
  return (
    <Container>
      <RegexColorText regex={/\d+%/g} color={'blue'}>
        {`물 원소의 부착 지속 시간이 40% 감소한다. 초전도, 과부하, 감전 반응을 일으키면 100%의 확률로 번개 원소 입자가 1개 생성된다.\n재사용 대기시간: 5초`}
      </RegexColorText>
    </Container>
  );
}
