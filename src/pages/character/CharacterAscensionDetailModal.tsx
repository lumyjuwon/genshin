import React from 'react';
import styled from 'styled-components';

import { Modal } from 'src/components';

interface Props {
  visible: boolean;
  cancel: Function;
}

export function CharacterAscensionDetailModal(props: Props) {
  return (
    <Modal visible={props.visible} cancel={props.cancel}>
      <div>Character Detail Modal</div>
    </Modal>
  );
}
