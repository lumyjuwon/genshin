import { ActionTypes, ArtifactAction, ArtifactState } from './types';

export const initialCommonState: ArtifactState = {
  consumedResin: 0
};

export function artifactReducer(state = initialCommonState, action: ArtifactAction) {
  switch (action.type) {
    case ActionTypes.SetConsumedResin:
      return {
        ...state,
        server: action.payload
      };
    default:
      return state;
  }
}
