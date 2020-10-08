import React from 'react';
import styled from 'styled-components';

import { FlexCenterWrapper, TextCenterWrapper } from 'src/components';

interface Props {
  times: number,
  three: number;
  four: number;
  five: number;
}

export function GachaResult({ times, three, four, five }: Props) {
  const ResultView = styled.div({
    display: "flex"
  });

  const FlexCenterWrapperExtended = styled.div({
    flex: "1"
  })

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
      <FlexCenterWrapperExtended as={FlexCenterWrapper}>
        <div>
          list
        </div>
      </FlexCenterWrapperExtended>
    </ResultView>
  );
}