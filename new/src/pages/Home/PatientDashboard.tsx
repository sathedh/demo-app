import React, { useEffect, useState } from "react";
import axios from "axios";
import IPatient from "../../constants/objects";
import DataTable from "../../components/DataTable";

const PatientDashborad = () => {
  const [patientData, setPatientData] = useState<IPatient[]>([]);

  useEffect(() => {
    const showDetails = () => {
      const data = axios.get("/db/patientData.json");
      data.then((response: any) => {
        setPatientData(response.data);
      });
    };
    showDetails();
  }, []);

  return (
    <div style={{ backgroundColor: "#f0f4f5" }}>
      <DataTable />
    </div>
  );
};

export default PatientDashborad;
