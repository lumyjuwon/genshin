type Rank = number;

export type ArtifactName = string;
export type ArtifactType = 'Flower' | 'Feather' | 'HourGlass' | 'HolyGrail' | 'Crown';

interface Artifact {
  [name: string]: {
    rank: Rank;
    type: ArtifactType;
    set: string;
  };
}
const artifactInfo: Artifact = require('./artifact-info.json');

interface ArtifactSet {
  [name: string]: {
    rank: Rank;
    Flower: ArtifactName;
    Feather: ArtifactName;
    HourGlass: ArtifactName;
    HolyGrail: ArtifactName;
    Crown: ArtifactName;
    TwoPieceSet: string;
    FourPieceSet: string;
  };
}
const artifactSetInfo: ArtifactSet = require('./artifact-set-info.json');

export { artifactInfo, artifactSetInfo };
