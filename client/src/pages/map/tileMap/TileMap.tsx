import React from 'react';
import styled from 'styled-components';

import { MapImages } from 'src/resources/images';

interface MapProps {}

const Map = styled.img<MapProps>((props: MapProps) => {
  return {
    width: '100%',
    height: 'auto'
  };
});

export function TileMap() {
  return <Map src={MapImages.Map} />;
}
