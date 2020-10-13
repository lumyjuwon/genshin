import React from "react";
import styled from "styled-components";

import { FlexWrapper, SquareImage } from "src/components";
import characterInfo from '../../resources/data/characterInfo.json';

const characterInfoObject = JSON.parse(characterInfo);

interface Props {
  result: Array<string>;
}

// interface Character {
//   "Klee": (string | number)[];
//   "Keqing": (string | number)[];
//   "Diluc": (string | number)[];
//   "Jean": (string | number)[];
//   "Qiqi": (string | number)[];
//   "Mona": (string | number)[];
//   "Venti": (string | number)[];
//   "Xiao": (string | number)[];
//   "Noelle": (string | number)[];
//   "Razor": (string | number)[];
//   "Ningguang": (string | number)[];
//   "Lisa": (string | number)[];
//   "Kaeya": (string | number)[];
//   "Fischl": (string | number)[];
//   "Chongyun": (string | number)[];
//   "Bennett": (string | number)[];
//   "Beidou": (string | number)[];
//   "Barbara": (string | number)[];
//   "Amber": (string | number)[];
//   "Sucrose": (string | number)[];
//   "Xiangling": (string | number)[];
//   "Xinqiu": (string | number)[];
// };

enum Color {
  five = "#a86d1f",
  four = "b182c4"
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
          console.log(characterInfoObject[r]);
          return (
            <FlexWrapper styles={{flexDirection: "column"}} key={i}>
              <SquareImage
                styles={{ height: "300px", boxShadow: "0 0 8px 2px #a86d1f, 0px 10px 5px #a86d1f, 0px -10px 5px #a86d1f" }}
                src={require(`../../resources/characters/images/gacha/${r}.jpg`)}
              />
            </FlexWrapper>
          );
        })}
        
      </GridContainer>
    </FlexWrapper>
  );
}
