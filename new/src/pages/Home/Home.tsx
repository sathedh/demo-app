import { Button } from "primereact/button";
import React from "react";
import {
  patientDashborad,
  patientCount,
  buttonContainerForPatients,
} from "../../constants/objects";
import { addPatient, deletePatient } from "../../redux/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={patientDashborad as React.CSSProperties}>
      <h2 style={patientCount as React.CSSProperties}>
        Patient Waiting Count: {state.numOfPatient}
      </h2>
      <div style={buttonContainerForPatients}>
        <Button
          label="Add patient"
          severity="success"
          onClick={() => {
            dispatch(addPatient());
          }}
        />
        <Button
          label="Discharge Patient"
          severity="danger"
          disabled={state.numOfPatient > 0 ? false : true}
          onClick={() => {
            dispatch(deletePatient());
          }}
        />
        <Button
          severity="help"
          label="View Dashboard"
          onClick={() => navigate("/dashboard")}
        />
        <Button
          severity="help"
          label="Back to Login"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default Home;
