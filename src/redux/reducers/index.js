import { INCREASE_NUM } from '../actions';

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUM:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
