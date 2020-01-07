import { SET_ACTIVE, CLOSE_ACTIVE } from "../constants";

const googleReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, activeRecord: action.payload };

    case CLOSE_ACTIVE:
      return { ...state, activeRecord: null };
    default:
      return state;
  }
};

export default googleReducer;
