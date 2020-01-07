import { SET_ACTIVE, CLOSE_ACTIVE } from "../constants";

export const ASetActiveRecord = newActive => ({
  type: SET_ACTIVE,
  payload: newActive
});

export const ACloseActiveRecord = () => ({
  type: CLOSE_ACTIVE
});
