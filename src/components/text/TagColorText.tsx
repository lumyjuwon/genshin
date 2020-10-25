import React from 'react';

function parseColorText(text: string, regex: RegExp, color: string) {
  const matchedText: string[] | null = text.match(regex);

  if (matchedText === null) {
    return [];
  }

  const coloredText: Array<string | JSX.Element> = [];
  let extraText = text;
  for (const matched of matchedText) {
    const splitedText = extraText.split(matched);

    coloredText.push(splitedText[0]);
    coloredText.push(
      <span key={matched} style={{ color: color }}>
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
}

export function TagColorText(props: Props) {
  const coloredText = parseColorText(props.children, props.regex, props.color);
  return (
    <p>
      {coloredText?.map((text) => {
        return text;
      })}
    </p>
  );
}
