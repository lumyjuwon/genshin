import React from "react";
import styled from "styled-components";

import { characterInfo, weaponInfo } from 'src/resources/data';
import { FlexWrapper, SquareImage } from "src/components";

const GridContainer = styled.div({
  backgroundColor: "#333",
  display: "grid",
  width: "1200px",
  height: "400px",
  gridTemplateColumns: "repeat(auto-fit, 100px)",
  columnGap: "12px",
  textAlign: "center",
  padding: "0 15px",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",
});

interface Props {
  result: Array<string>;
}

export function GachaArrangeView(props: Props) {

  const shadowPal: { five: string; four: string } = {
    five: "0 0 8px 2px #a86d1f, 0px 25px 5px #a86d1f, 0px -25px 5px #a86d1f",
    four: "0 0 8px 2px #b182c4, 0px 25px 5px #b182c4, 0px -25px 5px #b182c4",
  };

  return (
    <FlexWrapper>
      <GridContainer>
        {props.result.map((item: string, index: number) => {
          let shadow = "0 0 8px 2px #777, 0px 8px 5px #777, 0px -8px 5px #777";
          if (characterInfo[item]) {
            if (characterInfo[item].rank === 5) shadow = shadowPal.five;
            else if (characterInfo[item].rank === 4) shadow = shadowPal.four;

          } else {
            if (weaponInfo[item].rank === 5) shadow = shadowPal.five;
            else if (weaponInfo[item].rank === 4) shadow = shadowPal.four;
          }
          return (
            <SquareImage
              key={index}
              styles={{
                height: "300px",
                boxShadow: `${shadow}`,
                objectFit: "none",
              }}
              src={require(`../../resources/images/gacha/${item}.png`)}
            />
          );
        })}
      </GridContainer>
    </FlexWrapper>
  );
}
