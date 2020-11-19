import React from 'react';
// import styled from 'styled-components';

// import { characterAscensionItemInfo, characterInfo } from 'src/resources/data';
// import { CharacterAscentionItemImages, ElementImages } from 'src/resources/images';
// import { RoundImage, GridWrapper, ItemBadgeBox, FlexWrapper } from 'src/components';
// import { CharacterImages } from 'src/resources/images';
// import { trans, Lang, KeyLang } from 'src/resources/languages';

// const Container = styled.div({
//   display: 'flex',
//   width: '100%',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   margin: '50px 0 0'
// });

// const Title = styled.div({
//   fontSize: '20px',
//   fontWeight: 'bold',
//   textAlign: 'center'
// });

// const ImageWrapper = styled.div({
//   display: 'flex',
//   width: '70px',
//   justifyContent: 'center',
//   alignItems: 'center'
// });

// const RelativeBox = styled.div({
//   position: 'relative'
// });

// const ItemName = styled.div({
//   fontSize: '14px',
//   width: '170px',
//   '@media screen and (max-width: 768px)': {
//     width: '100px',
//     fontSize: '12px'
//   }
// });

// const ItemRegion = styled.div({
//   width: '100px',
//   fontSize: '14px',
//   textAlign: 'center',
//   '@media screen and (max-width: 1380px)': {
//     width: '80px'
//   },
//   '@media screen and (max-width: 768px)': {
//     fontSize: '12px'
//   }
// });

// const DisplayNone = styled.div({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   '@media screen and (max-width: 768px)': {
//     display: 'none'
//   }
// });

// interface Props {
//   onClick: Function;
// }

// export function CharacterAscesion(props: Props) {
//   const ascensionItems = Object.keys(characterAscensionItemInfo);
//   const characters = Object.keys(characterInfo);

//   return (
//     <Container>
//       <Title>Character Ascension Items</Title>
//       {/* <FlexWrapper styles={{ flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0 0', small: { alignItems: 'center' } }}>
//         <>
//           <DisplayNone>
//             <FlexWrapper>
//               <FlexWrapper styles={{ width: '240px' }}>{trans(Lang.Item)}</FlexWrapper>
//               <FlexWrapper styles={{ width: '100px', medium: { width: '80px' } }}>{trans(Lang.Character_Region)}</FlexWrapper>
//               <FlexWrapper styles={{ width: '450px', medium: { width: '400px' } }}>{trans(Lang.Character)}</FlexWrapper>
//             </FlexWrapper>
//           </DisplayNone>
//           {ascensionItems.map((item) => {
//             return (
//               <FlexWrapper styles={{ margin: '10px 0 0', small: { flexDirection: 'column' } }} key={item}>
//                 <FlexWrapper>
//                   <ImageWrapper>
//                     <RelativeBox>
//                       <RoundImage
//                         src={CharacterAscentionItemImages[item]}
//                         styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
//                       />
//                     </RelativeBox>
//                   </ImageWrapper>
//                   <ItemName>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</ItemName>
//                   <ItemRegion>{trans(Lang[characterAscensionItemInfo[item].region as KeyLang])}</ItemRegion>
//                 </FlexWrapper>
//                 <GridWrapper styles={{ width: '450px', medium: { width: '400px' } }}>
//                   {characters.map((character) => {
//                     if (characterInfo[character].ascension.items.includes(item)) {
//                       return (
//                         <ItemBadgeBox
//                           key={character.concat('_ascension')}
//                           badge={
//                             <RoundImage src={ElementImages[characterInfo[character].element]} styles={{ width: '20px', height: '20px' }} />
//                           }
//                           child={
//                             <RoundImage
//                               src={CharacterImages[character]}
//                               styles={{
//                                 width: '60px',
//                                 height: '60px',
//                                 medium: { width: '50px', height: '50px' },
//                                 small: { width: '50px', height: '50px' }
//                               }}
//                             />
//                           }
//                           styles={{
//                             boxStyles: { margin: '3px', small: { margin: '6px 3px 3px' } }
//                           }}
//                           isActive={true}
//                           onClick={() => props.onClick(character)}
//                           hoverInnerColor="#f1f2f3"
//                           isToolTipVisible={false}
//                           isRankVisible={false}
//                         />
//                       );
//                     } else return null;
//                   })}
//                 </GridWrapper>
//               </FlexWrapper>
//             );
//           })}
//         </>
//       </FlexWrapper> */}
//     </Container>
//   );
// }
