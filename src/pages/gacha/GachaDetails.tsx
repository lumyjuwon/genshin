import React from 'react';
import styled from 'styled-components';

import { gachaInfo } from '../../resources/data';
import { FlexWrapper, TextCenterWrapper, SquareImage, EmojiText } from 'src/components';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { changeItemNameToKeyLang } from 'src/utils';

interface Styles {
  styles: {
    fontSize?: string;
    margin?: string;
    small?: {
      fontSize?: string;
    };
  };
}

const Details = styled.div({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0,0,0,0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  '@media screen and (max-height: 575px)': {
    alignItems: 'flex-start',
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
});

const Help = styled.div({
  display: 'flex',
  width: '40px',
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '7px',
  border: '1px solid #f1f2f3',
  cursor: 'pointer',
  borderRadius: '50%',
  transition: '0.2s',
  '&:hover': {
    backgroundColor: '#f1f2f3'
  }
});

const DetailsContainer = styled.div({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '1140px',
  margin: '0 auto',
  '@media screen and (max-width: 1380px)': {
    width: '700px'
  },
  '@media screen and (max-width: 768px)': {
    width: '90%'
  }
});

const ExitButton = styled.span({
  display: 'inline-block',
  position: 'absolute',
  top: '0',
  right: '0',
  fontSize: '35px',
  cursor: 'pointer',
  '@media screen and (max-width: 768px)': {
    fontSize: '25px'
  }
});

const TextAlignLeft = styled.div<Styles>((props) => {
  return {
    width: '100%',
    fontSize: props.styles.fontSize || '16px',
    textAlign: 'left',
    margin: props.styles.margin || '20px 0',
    '@media screen and (max-width: 768px)': {
      fontSize: props.styles.small?.fontSize || props.styles.fontSize || '16px'
    }
  };
});

interface Props {
  content: string;
}

export function GachaDetails(props: Props) {
  const transFivePickUpList = gachaInfo[props.content].pickUpTarget.map((item) => trans(Lang[changeItemNameToKeyLang(item)]));
  const transFourStarPickUpList = gachaInfo[props.content].fourStars.pickUpItems.map((item) => trans(Lang[changeItemNameToKeyLang(item)]));

  const onExitClick = () => {
    const help = document.getElementById('help');
    help && (help.style.visibility = help.style.visibility === 'hidden' ? 'visible' : 'hidden');
  };

  return (
    <div style={{ position: 'relative' }}>
      <Help onClick={() => onExitClick()}>
        <EmojiText label="help" symbol="❔" />
      </Help>
      <Details id="help" style={{ visibility: 'hidden' }}>
        <DetailsContainer>
          <ExitButton role="img" onClick={() => onExitClick()}>
            <EmojiText label="exit" symbol="❌" />
          </ExitButton>
          <TextCenterWrapper styles={{ fontSize: '35px', margin: '0', padding: '0', small: { fontSize: '25px' } }}>
            {trans(Lang.Help_Title)}
          </TextCenterWrapper>
          <TextAlignLeft styles={{ fontSize: '25px', small: { fontSize: '20px' } }}>1. {trans(Lang.Help_Prob)}</TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '20px', margin: '0 0 20px', small: { fontSize: '16px' } }}>
            {trans(Lang.Help_Prob_Five)}: {gachaInfo[props.content].fiveStars.percent}%,&nbsp;
            {trans(Lang.Help_Prob_Four)}: {gachaInfo[props.content].fourStars.percent}%
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '20px', margin: '0 0 20px', small: { fontSize: '16px' } }}>
            {trans(Lang.Help_Prob_Five_Pick_Up)}: {gachaInfo[props.content].fiveStars.pickUpPercent}%,&nbsp;
            {trans(Lang.Help_Prob_Four_Pick_Up)}: {gachaInfo[props.content].fourStars.pickUpPercent}%
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '25px', small: { fontSize: '20px' } }}>2. {trans(Lang.Help_Item)}</TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '20px', margin: '0 0 20px', small: { fontSize: '16px' } }}>
            <>
              {trans(Lang.Help_Content)}: {trans(Lang[props.content as KeyLang])}
            </>
          </TextAlignLeft>
          <FlexWrapper styles={{ width: '100%', justifyContent: 'flex-start', small: { justifyContent: 'center' } }}>
            <>
              <SquareImage
                src={require(`../../resources/images/gacha/${props.content.replace(/_/g, ' ')}.jpg`)}
                styles={{ width: '600px', height: '300px', small: { width: '90%', height: 'auto' } }}
              />
            </>
          </FlexWrapper>
          <TextAlignLeft styles={{ fontSize: '20px', small: { fontSize: '16px' } }}>
            {trans(Lang.Five_Pick_Up)}: {transFivePickUpList.join(', ') || 'None'}
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '20px', margin: '0', small: { fontSize: '16px' } }}>
            {trans(Lang.Four_Pick_Up)}: {transFourStarPickUpList.join(', ') || 'None'}
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: '22px', small: { fontSize: '18px' } }}>
            <span role="img">⚠</span>&nbsp;{trans(Lang.Help_Warning)}
          </TextAlignLeft>
        </DetailsContainer>
      </Details>
    </div>
  );
}
