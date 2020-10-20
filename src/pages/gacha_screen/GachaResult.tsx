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
  display: "flex",
  width: "fit-content",
  margin: "0 auto",
});

export function GachaResult(props: Props) {

  return (
    <ResultView>
      <TextCenterWrapper>
        <>
          <div>
            {`Total Gacha Times: ${props.times}`}
          </div>
          {/* <div>
            {Next Pity: }
          </div> */}
          {/* <div>
            {Next Absolute: }
          </div> */}
          <div>
            {`5★: ${props.five}`}
          </div>
          <div>
            {`4★: ${props.four}`}
          </div>
          <div>
            {`3★: ${props.three}`}
          </div>
        </>
      </TextCenterWrapper>
    </ResultView>
  );
}