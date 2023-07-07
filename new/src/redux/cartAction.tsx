import { ADD_PATIENT, DELETE_PATIENT } from "./actionTypes";

const addPatient = () => {
  return {
    type: ADD_PATIENT,
  };
};

const deletePatient = () => {
  return {
    type: DELETE_PATIENT,
  };
};

export { addPatient, deletePatient };
