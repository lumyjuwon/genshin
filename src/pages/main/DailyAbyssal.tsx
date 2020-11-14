import React, { useState } from 'react';
import styled from 'styled-components';

import {
  weaponAscesionItemInfo,
  characterTalentItemInfo,
  WeaponAscesionItem,
  CharacterTalentItem,
  serverTimeInfo
} from 'src/resources/data';
import { setServers } from 'dns';
import { FlexWrapper, RoundImage, TooltipText, DropDownButton, BoxModelWrapper } from 'src/components';
import { DailySetImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

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
    flexDirection: 'column'
  }
});

const InnerContainer = styled.div({
  display: 'flex',
  margin: '10px 0 0',
  padding: '0 10px'
});

const ImageContainer = styled.div({
  position: 'relative',
  margin: '0 8px'
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
  let serverDay: string = convertToTextDay(serverTime.getUTCDay());

  const weaponAscesionItemSet = Object.keys(weaponAscesionItemInfo);
  const characterTalentItemSet = Object.keys(characterTalentItemInfo);

  // Server Time reset in 4 AM of serverTime
  if (serverTime.getUTCHours() < 4) {
    serverDay = convertToTextDay(serverTime.getUTCDay() - 1);
  }

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
          <FlexWrapper>
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
                    height: 'max-content'
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
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <>
            <div>{trans(Lang.Daily_Character)}</div>
            <InnerContainer>
              {serverDay === 'Sunday' ? (
                <div>All</div>
              ) : (
                getTodayAbyssalItems(characterTalentItemSet, characterTalentItemInfo).map((name) => {
                  return (
                    <ImageContainer key={name}>
                      <RoundImage src={DailySetImages[name]} styles={{ width: '80px', height: '80px' }} />
                      <TooltipText styles={{ bottom: '0', fontSize: '14px' }}>{trans(Lang[name as KeyLang])}</TooltipText>
                    </ImageContainer>
                  );
                })
              )}
            </InnerContainer>
          </>
        </FlexWrapper>
        <FlexWrapper styles={{ flexDirection: 'column', small: { margin: '10px 0 0' } }}>
          <>
            <div>{trans(Lang.Daily_Weapon)}</div>
            <InnerContainer>
              {serverDay === 'Sunday' ? (
                <div>All</div>
              ) : (
                getTodayAbyssalItems(weaponAscesionItemSet, weaponAscesionItemInfo).map((name) => {
                  return (
                    <ImageContainer key={name}>
                      <RoundImage src={DailySetImages[name]} styles={{ width: '80px', height: '80px' }} />
                      <TooltipText styles={{ bottom: '0', fontSize: '14px' }}>{trans(Lang[name as KeyLang])}</TooltipText>
                    </ImageContainer>
                  );
                })
              )}
            </InnerContainer>
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
