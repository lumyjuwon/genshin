import React from 'react';
import styled from 'styled-components';

interface Props {
  times: number
}

export function GachaResult({ times }: Props) {
  const ResultView = styled.div({

  });

  return (
    <ResultView>
      {`Total Times: ${times}`}
    </ResultView>
  );
}