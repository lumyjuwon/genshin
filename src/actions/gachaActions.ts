export const ADD_WISH_COUNT = 'ADD_COUNT';
export const RESET_ALL = 'RESET_ALL';
export const GACHA_EXECUTION_RESULT = 'GACHA_EXECUTION_RESULT';
export const SET_WISH_CONTENT = 'SET_WISH_CONTENT';

export function addWishCount(count: number) {
  return {
    type: ADD_WISH_COUNT,
    count
  }
}

export function resetAll() {
  return {
    type: RESET_ALL,
  }
}

export function gachaExecutionResult() {
  return {
    type: GACHA_EXECUTION_RESULT
  }
}

export function setWishContent(content: string) {
  return {
    type: SET_WISH_CONTENT,
    content
  }
}