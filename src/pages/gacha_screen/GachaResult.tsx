import React from 'react';
import styled from 'styled-components';

import { TextCenterWrapper } from 'src/components';

interface Props {
  times: number,
  three: number;
  four: number;
  five: number;
}

const ResultView = styled.div({
  display: "flex"
});

export function GachaResult({ times, three, four, five }: Props) {

  return (
    <ResultView>
      <TextCenterWrapper>
        <>
          <div>
            {`Total Times: ${times}`}
          </div>
          <div>
            {`5★: ${five}`}
          </div>
          <div>
            {`4★: ${four}`}
          </div>
          <div>
            {`3★: ${three}`}
          </div>
        </>
      </TextCenterWrapper>
    </ResultView>
  );
}