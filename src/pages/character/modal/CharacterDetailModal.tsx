import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, Modal, RoundImage } from 'src/components';
import { CharacterImages } from 'src/resources/images';
import { TalentDetail } from './TalentDetail';
import { AscensionDetail } from './AscensionDetail';

const Name = styled.span({
  fontSize: '25px',
  fontWeight: 'bold',
  margin: '0 0 0 10px'
});

interface Props {
  visible: boolean;
  cancel: Function;
  character: string;
}

export function CharacterDetailModal(props: Props) {
  if (props.character) {
    return (
      <Modal visible={props.visible} cancel={props.cancel}>
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <>
            <FlexWrapper>
              <RoundImage src={CharacterImages[props.character]} styles={{ small: { width: '80px', height: '80px' } }} />
              <Name>{props.character}</Name>
            </FlexWrapper>
            <AscensionDetail character={props.character} />
            <TalentDetail character={props.character} />
          </>
        </FlexWrapper>
      </Modal>
    );
  } else {
    return null;
  }
}
