import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button, Typography } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import axios from "axios";
import { TreeSelect } from "primereact/treeselect";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {
  appDownloadStyles,
  clinicianStyles,
  columnStyles,
  filerContainer,
  globalHeaderStyles,
  headerStyles,
  medStatusStyles,
  patientReportedStyles,
  selectTextStyles,
  tableStyles,
  viewAllStyle,
} from "../constants/objects";
import { NodeService } from "../service/NodeService";
export default function DataTables() {
  const [patientData, setPateintData] = useState<any>();
  const [filters, setFilters] = useState<any>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    patient: { value: null, matchMode: FilterMatchMode.CONTAINS },
    mrn: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    t_plan: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    cycle: { value: null, matchMode: FilterMatchMode.CONTAINS },
    next_visit: { value: null, matchMode: FilterMatchMode.EQUALS },
    med_status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [nodes, setNodes] = useState<any>(null);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

  useEffect(() => {
    const data = axios.get("/db/patientData.json");
    const medStatus = axios.get("/db/medStatus.json");
    data.then((response: any) => {
      setPateintData(response.data);
    });
    medStatus.then((response: any) => {
      setNodes(response.data);
    });
  }, []);

  let i = 0;
  const rowClass = (data: any) => {
    i++;
    return {
      "bg-gray-200": i % 2 !== 0,
    };
  };
  // console.log(nodes);
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    var _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div style={globalHeaderStyles}>
        <Typography style={{ fontSize: "1rem" }}>
          ONCOLOGY PATIENT DASHBOARD
        </Typography>
        <div className="flex justify-content-center">
          <span
            className="p-input-icon-left"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <i className="pi pi-search" style={{ fontSize: "1.25rem" }} />
            <InputText
              style={{ width: "25rem", fontSize: "1rem" }}
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search"
            />
          </span>
        </div>
      </div>
    );
  };
  const header = renderHeader();
  return (
    <div>
      <DataTable
        value={patientData}
        editMode="cell"
        tableStyle={tableStyles}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        rowHover
        rowClassName={rowClass}
        header={header}
        filters={filters}
      >
        <Column
          style={columnStyles}
          field="patient"
          header="Patient"
          headerStyle={headerStyles}
          sortable
        />
        <Column
          style={columnStyles}
          field="mrn"
          header="MRN"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="t_plan"
          header="Treatment Plan"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="cycle"
          header="Cycle"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="next_visit"
          header="Next Onc Visit"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="med_status"
          header="Medication Status"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="missed_doses"
          header="Missed Doses"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="barrirs"
          header="Barriers"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="symptoms"
          header="Symptoms"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="patient_concern"
          header="Patient Concern Addressed"
          headerStyle={headerStyles}
        />
        <Column
          style={columnStyles}
          field="actions"
          header="Actions"
          headerStyle={headerStyles}
        />
      </DataTable>
      <div style={filerContainer}>
        <div style={selectTextStyles}>Select filter:</div>
        <Button style={viewAllStyle} variant="contained">
          View All
        </Button>
        <TreeSelect
          value={selectedNodeKeys}
          onChange={(e: any) => {
            var _filters = { ...filters };
            console.log(e.value.indexOf[e.value]);
            _filters["global"].value = e.value;
            setSelectedNodeKeys(e.value);
            setFilters(_filters);
          }}
          options={nodes}
          style={medStatusStyles}
          selectionMode="checkbox"
          placeholder="Med Status"
          display="comma"
        ></TreeSelect>
        <Button
          style={appDownloadStyles}
          variant="outlined"
          endIcon={<ArrowDropDownOutlinedIcon style={{ fontSize: "3rem" }} />}
        >
          App Downloads
        </Button>
        <Button
          style={patientReportedStyles}
          variant="outlined"
          endIcon={<ArrowDropDownOutlinedIcon style={{ fontSize: "3rem" }} />}
        >
          Patient Reported
        </Button>
        <Button
          style={clinicianStyles}
          variant="outlined"
          endIcon={<ArrowDropDownOutlinedIcon style={{ fontSize: "3rem" }} />}
        >
          Clinician
        </Button>
      </div>
    </div>
  );
}
