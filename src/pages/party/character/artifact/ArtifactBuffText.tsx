import React from 'react';
import styled from 'styled-components';

import { ArtifactName, artifactInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';

const Container = styled.div({
  display: 'flex',
  flex: '3 1',
  width: '100%',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
  '@media screen and (max-width: 1380px)': {
    // width: '700px',
    margin: '15px 0'
  },
  '@media screen and (max-width: 768px)': {
    width: '220px',
    flex: 'none',
    margin: '20px auto'
  }
});

const Title = styled.p({
  fontSize: '20px',
  marginBottom: '16px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '0'
  }
});

function convertToArtifactsSetCountMap(artifacts: Artifacts): Map<string, number> {
  let artifactsCount: Map<string, number> = new Map();
  Object.values(artifacts).forEach((artif) => {
    let setName: string = artifactInfo[artif].set;
    if (artifactsCount.has(setName)) {
      // @ts-ignore Check Has
      artifactsCount.set(setName, artifactsCount.get(setName) + 1);
    } else {
      artifactsCount.set(setName, 1);
    }
  });
  return artifactsCount;
}

function getDescription(artifacts: Map<string, number>) {
  const descriptions: string[] = [];

  for (const artifact of artifacts) {
    const artifactSetName = artifact[0];
    const artifactCount = artifact[1];

    if (artifactSetName === 'Prayers for Destiny' || 'Prayers for Illumination' || 'Prayers to Springtime' || 'Prayers for Wisdom') {
      descriptions.push(trans(Lang[artifactSetName.replace(/\s/g, '_') as KeyLang]));
    }

    if (artifactCount >= 2) {
      switch (artifactSetName) {
        case 'Adventurer':
          descriptions.push(trans(Lang.Adventurer_TwoPieceSet));
          break;
        case 'Lucky Dog':
          descriptions.push(trans(Lang.LuckyDog_TwoPieceSet));
          break;
        case 'Traveling Doctor':
          descriptions.push(trans(Lang.TravelingDoctor_TwoPieceSet));
          break;
        case 'Instructor':
          descriptions.push(trans(Lang.Instructor_TwoPieceSet));
          break;
        case 'Berserker':
          descriptions.push(trans(Lang.Berserker_TwoPieceSet));
          break;
        case 'The Exile':
          descriptions.push(trans(Lang.TheExile_TwoPieceSet));
          break;
        case 'Resolution of Sojourner':
          descriptions.push(trans(Lang.ResolutionofSojourner_TwoPieceSet));
          break;
        case 'Martial Artist':
          descriptions.push(trans(Lang.MartialArtist_TwoPieceSet));
          break;
        case "Defender's Will":
          descriptions.push(trans(Lang.DefenderOfWill_TwoPieceSet));
          break;
        case "Tiny Miracle's":
          descriptions.push(trans(Lang.TinyMiracle_TwoPieceSet));
          break;
        case 'Heart of Bravery':
          descriptions.push(trans(Lang.BraveHeart_TwoPieceSet));
          break;
        case 'Gambler':
          descriptions.push(trans(Lang.Gambler_TwoPieceSet));
          break;
        case 'Scholar':
          descriptions.push(trans(Lang.Scholar_TwoPieceSet));
          break;
        case "Gladiator's Finale":
          descriptions.push(trans(Lang.GladiatorOfFinale_TwoPieceSet));
          break;
        case 'Maiden Beloved':
          descriptions.push(trans(Lang.MaidenBeloved_TwoPieceSet));
          break;
        case 'Noblesse Oblige':
          descriptions.push(trans(Lang.NoblesseOblige_TwoPieceSet));
          break;
        case 'Bloodstained Chivalry':
          descriptions.push(trans(Lang.BloodstainedChivalry_TwoPieceSet));
          break;
        case "Wanderer's Troupe":
          descriptions.push(trans(Lang.WandererOfTroupe_TwoPieceSet));
          break;
        case 'Viridescent Venerer':
          descriptions.push(trans(Lang.ViridescentVenerer_TwoPieceSet));
          break;
        case 'Thundering Fury':
          descriptions.push(trans(Lang.ThunderingFury_TwoPieceSet));
          break;
        case 'Thundershoother':
          descriptions.push(trans(Lang.Thundersoother_TwoPieceSet));
          break;
        case 'Crimson Witch of Flames':
          descriptions.push(trans(Lang.CrimsonWitchofFlames_TwoPieceSet));
          break;
        case 'Lavawalker':
          descriptions.push(trans(Lang.Lavawalker_TwoPieceSet));
          break;
        case 'Archaic Petra':
          descriptions.push(trans(Lang.ArchaicPetra_TwoPieceSet));
          break;
        case 'Retracing Bolide':
          descriptions.push(trans(Lang.RetracingBolide_TwoPieceSet));
          break;
      }
    }

    if (artifactCount >= 4) {
      switch (artifactSetName) {
        case 'Adventurer':
          descriptions.push(trans(Lang.Adventurer_FourPieceSet));
          break;
        case 'Lucky Dog':
          descriptions.push(trans(Lang.LuckyDog_FourPieceSet));
          break;
        case 'Traveling Doctor':
          descriptions.push(trans(Lang.TravelingDoctor_FourPieceSet));
          break;
        case 'Instructor':
          descriptions.push(trans(Lang.Instructor_FourPieceSet));
          break;
        case 'Berserker':
          descriptions.push(trans(Lang.Berserker_FourPieceSet));
          break;
        case 'The Exile':
          descriptions.push(trans(Lang.TheExile_FourPieceSet));
          break;
        case 'Resolution of Sojourner':
          descriptions.push(trans(Lang.ResolutionofSojourner_FourPieceSet));
          break;
        case 'Martial Artist':
          descriptions.push(trans(Lang.MartialArtist_FourPieceSet));
          break;
        case "Defender's Will":
          descriptions.push(trans(Lang.DefenderOfWill_FourPieceSet));
          break;
        case "Tiny Miracle's":
          descriptions.push(trans(Lang.TinyMiracle_FourPieceSet));
          break;
        case 'Heart of Bravery':
          descriptions.push(trans(Lang.BraveHeart_FourPieceSet));
          break;
        case 'Gambler':
          descriptions.push(trans(Lang.Gambler_FourPieceSet));
          break;
        case 'Scholar':
          descriptions.push(trans(Lang.Scholar_FourPieceSet));
          break;
        case "Gladiator's Finale":
          descriptions.push(trans(Lang.GladiatorOfFinale_FourPieceSet));
          break;
        case 'Maiden Beloved':
          descriptions.push(trans(Lang.MaidenBeloved_FourPieceSet));
          break;
        case 'Noblesse Oblige':
          descriptions.push(trans(Lang.NoblesseOblige_FourPieceSet));
          break;
        case 'Bloodstained Chivalry':
          descriptions.push(trans(Lang.BloodstainedChivalry_FourPieceSet));
          break;
        case "Wanderer's Troupe":
          descriptions.push(trans(Lang.WandererOfTroupe_FourPieceSet));
          break;
        case 'Viridescent Venerer':
          descriptions.push(trans(Lang.ViridescentVenerer_FourPieceSet));
          break;
        case 'Thundering Fury':
          descriptions.push(trans(Lang.ThunderingFury_FourPieceSet));
          break;
        case 'Thundershoother':
          descriptions.push(trans(Lang.Thundersoother_FourPieceSet));
          break;
        case 'Crimson Witch of Flames':
          descriptions.push(trans(Lang.CrimsonWitchofFlames_FourPieceSet));
          break;
        case 'Lavawalker':
          descriptions.push(trans(Lang.Lavawalker_FourPieceSet));
          break;
        case 'Archaic Petra':
          descriptions.push(trans(Lang.ArchaicPetra_FourPieceSet));
          break;
        case 'Retracing Bolide':
          descriptions.push(trans(Lang.RetracingBolide_FourPieceSet));
          break;
      }
    }
  }
  return descriptions;
}

interface Artifacts {
  Flower?: ArtifactName;
  Feather?: ArtifactName;
  HourGlass?: ArtifactName;
  HolyGrail?: ArtifactName;
  Crown?: ArtifactName;
}

interface Props {
  activeArtifacts: Artifacts;
}

export function ArtifactBuffText(props: Props) {
  const descriptions = getDescription(convertToArtifactsSetCountMap(props.activeArtifacts));

  return (
    <Container>
      <Title>{trans(Lang.Active_Artifact_Buff)}</Title>
      {descriptions.map((description: string, index: number) => {
        return (
          <RegexColorText key={index} regex={/\d+%/g} color={'red'} isBold={true}>
            {description}
          </RegexColorText>
        );
      })}
    </Container>
  );
}
