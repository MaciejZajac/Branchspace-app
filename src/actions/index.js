import { SET_ACTIVE, CLOSE_ACTIVE, ADD_PLACE, SHOW_ON_MAP } from "../constants";

export const ASetActiveRecord = newActive => ({
  type: SET_ACTIVE,
  payload: newActive
});

export const ACloseActiveRecord = () => ({
  type: CLOSE_ACTIVE
});

export const AAddPlace = place => ({
  type: ADD_PLACE,
  payload: place
});

export const AShowActiveOnMap = () => ({
  type: SHOW_ON_MAP
});
