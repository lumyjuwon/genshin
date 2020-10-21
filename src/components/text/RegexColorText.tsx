import React from "react";
import styled from "styled-components";

const P = styled.p({});

const Span = styled.span({});

interface Props {
  text: string;
  regex: string;
  color: string;
}

function splitColorText(text: string, colorText: string[]) {
  const coloredText: Array<string | JSX.Element> = [];
  for (const target in colorText) {
    const splitedText = text.split(target);
    coloredText.push(splitedText[0]);
  }
}

const regex = /\d+%/g;

export function RegexColorText(props: Props) {
  const colorText: string[] | null = props.text.match(regex);
  console.log(props.text.split("40%"));
  console.log(props.text.split("40%")[1].split("100%"));

  return (
    <p>
      {colorText?.map((text) => {
        return <span style={{ color: props.color }}> {text} </span>;
      })}
    </p>
  );
}
