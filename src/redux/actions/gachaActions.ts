export const CLICK_GACHA_BUTTON = 'CLICK_GACHA_BUTTON';
export const RESET_ALL = 'RESET_ALL';


export function addWishCount() {
  return {
    type: CLICK_GACHA_BUTTON
  }
}

export function resetAll() {
  return {
    type: RESET_ALL,
  }
}