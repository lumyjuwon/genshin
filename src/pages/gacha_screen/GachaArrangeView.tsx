import React from "react";
import styled from "styled-components";

import { FlexWrapper, SquareImage } from "src/components";
import characterInfo from '../../resources/data/characterInfo.json';

const characterInfoObject = JSON.parse(JSON.stringify(characterInfo));

interface Props {
  result: Array<string>;
}

const shadowColor: {five: string, four: string} = {
  five: "#a86d1f",
  four: "#b182c4"
}

export function GachaArrangeView(props: Props) {
  const GridContainer = styled.div({
    backgroundColor: "#333",
    display: "grid",
    width: "1200px",
    height: "400px",
    gridTemplateColumns: "repeat(auto-fit, 100px)",
    columnGap: "12px",
    textAlign: "center",
    padding: "0 15px"
  });

  return (
    <FlexWrapper>
      <GridContainer>

        {props.result.map((r: string, i: number) => {
          let shadow = "#777"
          console.log(characterInfoObject[r])
          // if (characterInfoObject[r][0] === 5) {
          //   shadow = shadowColor.five;
          // } else if (characterInfoObject[r][0] === 4) {
          //   shadow = shadowColor.four;
          // }
          return (
            <FlexWrapper styles={{flexDirection: "column"}} key={i}>
              <SquareImage
                styles={{ height: "300px", boxShadow: `0 0 8px 2px ${shadow}, 0px 10px 5px ${shadow}, 0px -10px 5px ${shadow}` }}
                src={require(`../../resources/characters/images/gacha/${r}.jpg`)}
              />
            </FlexWrapper>
          );
        })}
        
      </GridContainer>
    </FlexWrapper>
  );
}
