import React from 'react';
import styled from 'styled-components';

interface Style {
  fontSize?: string;
  small?: {
    fontSize?: string;
  };
}

const P = styled.span<Style>((props) => {
  return {
    lineHeight: '140%',
    textAlign: 'center',
    fontSize: props.fontSize || '16px',
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || '14px'
    }
  };
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
  styles?: Style;
}

export function RegexColorText(props: Props) {
  const coloredText = parseColorText(props.children, props.regex, props.color, props.isBold);
  return (
    <P {...props.styles}>
      {coloredText?.map((text) => {
        return text;
      })}
    </P>
  );
}
