import { SET_ACTIVE, CLOSE_ACTIVE, ADD_PLACE, SHOW_ON_MAP } from "../constants";
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

    case SHOW_ON_MAP:
      return { ...state, showOnMap: state.activeRecord };

    default:
      return state;
  }
};

export default googleReducer;
