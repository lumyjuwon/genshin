import React, { useState } from 'react';
import styled from 'styled-components';

import {
  weaponAscesionItemInfo,
  characterTalentItemInfo,
  WeaponAscesionItem,
  CharacterTalentItem,
  serverTimeInfo
} from 'src/resources/data';
import { FlexWrapper, RoundImage, TooltipText, DropDownButton, BoxModelWrapper, GridWrapper } from 'src/components';
import { DailySetImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { image } from 'html2canvas/dist/types/css/types/image';

const Container = styled.div({
  display: 'flex',
  padding: '10px 20px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(20,20,20,.8)',
  fontSize: '20px',
  borderRadius: '16px',
  boxShadow: '10px 10px 6px rgba(0,0,0,0.7)',
  transition: '.2s ease-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(38,38,38,0.5)'
  },
  '@media screen and (max-width: 768px)': {
    width: '260px'
  }
});

const SetContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 10px 0',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column',
    margin: '10px 0 0'
  }
});

const SubTitle = styled.div({
  margin: '0 0 10px'
});

const ImageContainer = styled.div({
  position: 'relative',
  margin: '0 3px'
});

type Items = WeaponAscesionItem | CharacterTalentItem;

export function DailyAbyssal() {
  const servers = Object.keys(serverTimeInfo);
  const [serverTimeZone, setServerTimeZone] = useState<string>(servers[0]);

  /*
  0. 현재 utc 시간을 가져온다.
  1. 데이터에서 UTC 시간을 가져온다. ex) Asia = 8
  2. 현재 UTC 시간에 기준시간을 더한다.
  3. 더한 UTC 시간이 0~4면 하루를 빼준다.
  */

  const serverTime = new Date();
  serverTime.setUTCHours(serverTime.getUTCHours() + serverTimeInfo[serverTimeZone]);
  let serverDay: string = convertToTextDay(serverTime.getUTCHours() < 4 ? serverTime.getUTCDay() - 1 : serverTime.getUTCDay());
  let imageSize: { width: string; height: string } = { width: '80px', height: '80px' };
  let fontSize = '14px';

  if (serverDay === 'Sunday') {
    imageSize = { width: '70px', height: '70px' };
    fontSize = '12px';
  }

  const weaponAscesionItemSet = Object.keys(weaponAscesionItemInfo);
  const characterTalentItemSet = Object.keys(characterTalentItemInfo);

  function changeServerTime(index: number) {
    setServerTimeZone(servers[index]);
  }

  function getTodayAbyssalItems(sets: Array<string>, info: Items): string[] {
    let todayItems: string[] = [];
    sets.forEach((setName) => {
      if (info[setName].day.includes(serverDay)) {
        todayItems.push(setName);
      }
    });
    return todayItems;
  }

  return (
    <Container>
      <FlexWrapper styles={{ width: '100%', justifyContent: 'space-between', small: { flexDirection: 'column' } }}>
        <>
          {trans(Lang.Daily_Abyssal_MainScreen)}
          <FlexWrapper styles={{ margin: '0 0 0 15px', small: { margin: '10px 0 0' } }}>
            <>
              <BoxModelWrapper styles={{ margin: '0 5px 0 0', medium: { margin: '0 5px 0 0' }, small: { margin: '0 5px 0 0' } }}>
                <div>{trans(Lang.Change_Server)}</div>
              </BoxModelWrapper>
              <DropDownButton
                id="server-time"
                onClick={changeServerTime}
                items={servers}
                content={serverTimeZone}
                defaultValue={serverTimeZone}
                styles={{
                  containerStyles: {
                    width: '80px',
                    height: 'max-content',
                    margin: '0'
                  },
                  listStyles: {
                    width: '80px',
                    top: '33px',
                    right: '-1px'
                  }
                }}
              />
            </>
          </FlexWrapper>
        </>
      </FlexWrapper>
      <SetContainer>
        <FlexWrapper styles={{ margin: '0 10px 0 0', flexDirection: 'column', small: { margin: '0' } }}>
          <>
            <SubTitle>{trans(Lang.Daily_Character)}</SubTitle>
            <GridWrapper styles={{ width: '250px', medium: { width: '250px' }, small: { width: '250px' } }}>
              {getTodayAbyssalItems(characterTalentItemSet, characterTalentItemInfo).map((name) => {
                return (
                  <ImageContainer key={name}>
                    <RoundImage src={DailySetImages[name]} styles={imageSize} />
                    <TooltipText styles={{ bottom: '0', fontSize: fontSize }}>{trans(Lang[name as KeyLang])}</TooltipText>
                  </ImageContainer>
                );
              })}
            </GridWrapper>
          </>
        </FlexWrapper>
        <FlexWrapper styles={{ flexDirection: 'column', small: { margin: '10px 0 0' } }}>
          <>
            <SubTitle>{trans(Lang.Daily_Weapon)}</SubTitle>
            <GridWrapper styles={{ width: '250px', medium: { width: '250px' }, small: { width: '250px' } }}>
              {getTodayAbyssalItems(weaponAscesionItemSet, weaponAscesionItemInfo).map((name) => {
                return (
                  <ImageContainer key={name}>
                    <RoundImage src={DailySetImages[name]} styles={imageSize} />
                    <TooltipText styles={{ bottom: '0', fontSize: fontSize }}>{trans(Lang[name as KeyLang])}</TooltipText>
                  </ImageContainer>
                );
              })}
            </GridWrapper>
          </>
        </FlexWrapper>
      </SetContainer>
    </Container>
  );
}

function convertToTextDay(day: number): string {
  let textDay: string;
  switch (day) {
    case -1:
      textDay = 'Saturday';
      break;
    case 0:
      textDay = 'Sunday';
      break;
    case 1:
      textDay = 'Monday';
      break;
    case 2:
      textDay = 'Tuesday';
      break;
    case 3:
      textDay = 'Wednesday';
      break;
    case 4:
      textDay = 'Thursday';
      break;
    case 5:
      textDay = 'Friday';
      break;
    case 6:
      textDay = 'Saturday';
      break;
    default:
      textDay = '';
  }
  return textDay;
}
