const header = { background: "#005075", width: "100vw", height: "10vh" };
const container = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "10vh",
};
const profileIcon = {
  display: "flex",
  justifyContent: "center",
};
const avatar = {
  width: "7rem",
  height: "7rem",
};
const heading = {
  color: "#00aaa6",
  textAlign: "center",
  fontSize: "2rem",
  marginTop: "2rem",
  fontWeight: 600,
};
const textField = {
  display: "flex",
  flexDirection: "row",
  marginTop: "2rem",
  justifyContent: "center",
};
const filedIconStyle = { marginTop: "0.3rem" };
const buttonContainer = {
  display: "flex",
  justifyContent: "center",
};
const buttonStyles = {
  marginTop: "2rem",
  background: "#005075",
  color: "#ffffff",
  border: "none",
  borderRadius: "0.3rem",
  width: "10rem",
};
const patientDashborad = {
  width: "100vw",
  height: "25vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const patientCount = { textAlign: "center" };
const buttonContainerForPatients = {
  width: "60rem",
  display: "flex",
  justifyContent: "space-around",
};
export default interface IPatient {
  name: "string";
  age: number;
  medical_history: "string";
  type: "string";
}

const globalHeaderStyles: any = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  height: "5vh",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
};
const tableStyles: any = {
  minWidth: "20vw",
  width: "98vw",
  height: "auto",
  alignItems: "center",
  margin: "3vh 4vh 2vh 4vh",
  padding: "12vh 5vh 5vh 5vh",
  scale: "auto",
  columnSpan: "all",
  background: "#ffffff",
  borderRadius: "0.5rem",
};
const filerContainer: any = {
  position: "absolute",
  top: "15vh",
  left: "4.8vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
const selectTextStyles: any = {
  color: "#a5a5a5",
  fontSize: "1rem",
};

const viewAllStyle: any = {
  width: "12rem",
  height: "3rem",
  fontSize: "0.8rem",
  background: "#00a499",
  color: "#ffffff",
  border: "none",
  textTransform: "unset",
  marginLeft: "2rem",
  marginRight: "2rem",
};
const medStatusStyles: any = {
  width: "12rem",
  height: "3rem",
  fontSize: "0.8rem",
  background: "#ffffff",
  color: "#777a7e",
  border: "#777a7e 3px solid",
  textTransform: "unset",
};
const appDownloadStyles: any = {
  width: "12rem",
  height: "3rem",
  fontSize: "0.8rem",
  background: "#ffffff",
  color: "#777a7e",
  border: "#777a7e 3px solid",
  borderRadius: "0.3rem",
  textTransform: "unset",
  marginLeft: "2rem",
  marginRight: "2rem",
};
const patientReportedStyles: any = {
  width: "12rem",
  height: "3rem",
  fontSize: "0.8rem",
  background: "#ffffff",
  color: "#777a7e",
  border: "#777a7e 3px solid",
  borderRadius: "0.3rem",
  textTransform: "unset",
};
const clinicianStyles: any = {
  width: "12rem",
  height: "3rem",
  fontSize: "0.8rem",
  background: "#ffffff",
  color: "#777a7e",
  border: "#777a7e 3px solid",
  borderRadius: "0.3rem",
  textTransform: "unset",
  marginLeft: "2rem",
  marginRight: "2rem",
};
const columnStyles: any = {
  border: "0.2rem solid #ffffff",
};
const headerStyles = {
  width: "auto",
  height: "15vh",
  color: "#006075",
  backgroundColor: "#dbdbdb",
};
export {
  header,
  container,
  profileIcon,
  avatar,
  heading,
  textField,
  filedIconStyle,
  buttonContainer,
  buttonStyles,
  patientDashborad,
  patientCount,
  buttonContainerForPatients,
  tableStyles,
  globalHeaderStyles,
  filerContainer,
  selectTextStyles,
  viewAllStyle,
  medStatusStyles,
  appDownloadStyles,
  patientReportedStyles,
  clinicianStyles,
  columnStyles,
  headerStyles,
};
