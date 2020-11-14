import React from 'react';
import styled from 'styled-components';

import { weaponAscesionItemInfo, characterTalentItemInfo, WeaponAscesionItem, CharacterTalentItem } from 'src/resources/data';
import { setServers } from 'dns';
import { FlexWrapper, RoundImage, TooltipText } from 'src/components';
import { DailySetImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  display: 'flex',
  padding: '10px 20px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0,0,0,.7)',
  fontSize: '20px',
  borderRadius: '16px',
  boxShadow: '10px 10px 6px rgba(0,0,0,0.7)',
  transition: '.2s ease-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(38,38,38,0.5)'
  }
});

const SetContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 10px 0'
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
  const present = new Date();
  const presentHour = present.getHours();
  // getDay: 0 = Sunday ~ 6 = Saturday
  let presentDay = convertToTextDay(present.getDay());

  const weaponAscesionItemSet = Object.keys(weaponAscesionItemInfo);
  const characterTalentItemSet = Object.keys(characterTalentItemInfo);

  // Server Time reset in 4 AM
  if (presentHour < 4) {
    presentDay = convertToTextDay(present.getDay() - 1);
  }

  function getTodayAbyssalItems(sets: Array<string>, info: Items): string[] {
    let todayItems: string[] = [];
    sets.forEach((setName) => {
      if (info[setName].day.includes(presentDay)) {
        todayItems.push(setName);
      }
    });
    return todayItems;
  }

  console.log(getTodayAbyssalItems(weaponAscesionItemSet, weaponAscesionItemInfo));
  console.log(getTodayAbyssalItems(characterTalentItemSet, characterTalentItemInfo));

  return (
    <Container>
      {trans(Lang.Daily_Abyssal_MainScreen)}
      <SetContainer>
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <>
            <div>{trans(Lang.Daily_Character)}</div>
            <InnerContainer>
              {getTodayAbyssalItems(characterTalentItemSet, characterTalentItemInfo).map((name) => {
                return (
                  <>
                    <ImageContainer>
                      <RoundImage src={DailySetImages[name]} styles={{ width: '80px', height: '80px' }} />
                      <TooltipText styles={{ bottom: '0', fontSize: '14px' }}>{trans(Lang[name as KeyLang])}</TooltipText>
                    </ImageContainer>
                  </>
                );
              })}
            </InnerContainer>
          </>
        </FlexWrapper>
        |<br />|
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <>
            <div>{trans(Lang.Daily_Weapon)}</div>
            <InnerContainer>
              {getTodayAbyssalItems(weaponAscesionItemSet, weaponAscesionItemInfo).map((name) => {
                return (
                  <ImageContainer>
                    <RoundImage src={DailySetImages[name]} styles={{ width: '80px', height: '80px' }} />
                    <TooltipText styles={{ bottom: '0', fontSize: '14px' }}>{trans(Lang[name as KeyLang])}</TooltipText>
                  </ImageContainer>
                );
              })}
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
