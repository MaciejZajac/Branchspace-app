import { SET_ACTIVE, CLOSE_ACTIVE, ADD_PLACE } from "../constants";
const initialState = {
  recordArr: []
};

const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return { ...state, recordArr: [...state.recordArr, action.payload] };

    case SET_ACTIVE:
      return { ...state, activeRecord: action.payload };

    case CLOSE_ACTIVE:
      return { ...state, activeRecord: null };
    default:
      return state;
  }
};

export default googleReducer;
