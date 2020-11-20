import React from 'react';
import styled from 'styled-components';

const P = styled.span({
  lineHeight: '140%',
  textAlign: 'center'
});

function parseColorText(text: string, regex: RegExp, color?: string, isBold?: boolean) {
  const matchedText: string[] | null = text.match(regex);

  if (matchedText === null) {
    return [text];
  }

  const coloredText: Array<string | JSX.Element> = [];
  let extraText = text;
  for (const matched of matchedText) {
    const splitedText = extraText.split(matched);

    coloredText.push(splitedText[0]);
    coloredText.push(
      <span key={matched} style={{ color: color, fontWeight: isBold ? 'bold' : 'normal' }}>
        {matched}
      </span>
    );
    extraText = splitedText[1];
  }

  coloredText.push(extraText);

  return coloredText;
}

interface Props {
  children: string;
  regex: RegExp;
  color?: string;
  isBold?: boolean;
}

export function RegexColorText(props: Props) {
  const coloredText = parseColorText(props.children, props.regex, props.color, props.isBold);
  return (
    <P>
      {coloredText?.map((text) => {
        return text;
      })}
    </P>
  );
}
