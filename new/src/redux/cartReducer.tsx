import { ADD_PATIENT, DELETE_PATIENT } from "./actionTypes";

const initialState = {
  numOfPatient: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PATIENT:
      return {
        ...state,
        numOfPatient: state.numOfPatient + 1,
      };

    case DELETE_PATIENT:
      return {
        ...state,
        numOfPatient: state.numOfPatient - 1,
      };
    default:
      return state;
  }
};
