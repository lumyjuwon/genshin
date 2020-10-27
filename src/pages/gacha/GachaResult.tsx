import React, { useState } from 'react';
import styled from 'styled-components';

import { FlexWrapper, SquareImage } from 'src/components';

interface Props {
  times: number;
  result: Array<string>;
  four: number;
  five: number;
  pity?: number;
  gem: number;
}

const ResultBar = styled.div({
  display: "flex",
  width: "fit-content",
  margin: "0 auto",
  borderRadius: "16px",
  border: "2px dashed #f1f2f3"
});

const Result = styled.div({
  margin: "10px 10px",
  padding: "5px 10px",

})

export function GachaResult(props: Props) {

  props.result.map((item: string) => {
    
  })

  return (
    <ResultBar>
      <FlexWrapper styles={{
        small: {flexDirection: "column"}
      }}>
        <>
        <Result>
          {`Gacha Times: ${props.times}`}
        </Result>
        <Result>
          {`Next Pity: ${props.pity}`}
        </Result>
        <Result>
          {`5★: ${props.five}`}
        </Result>
        <Result>
          {`4★: ${props.four}`}
        </Result>
        <Result>
          <FlexWrapper>
            <>
            <SquareImage
              styles={{ width: "20px", height: "20px" }}
              src={require("../../resources/images/items/gem/Primogem.webp")}
            />
            <span>{`: ${props.gem}`}</span>
            </>
          </FlexWrapper>
        </Result>
        </>
      </FlexWrapper>
    </ResultBar>
  );
}