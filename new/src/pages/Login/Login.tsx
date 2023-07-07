import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import {
  header,
  container,
  profileIcon,
  avatar,
  heading,
  textField,
  filedIconStyle,
  buttonContainer,
  buttonStyles,
} from "../../constants/objects";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateUser: any = (userName: string, password: string) => {
    if (userName === "dhananjay" && password === "123456") {
      navigate("/home");
    } else {
      alert("Please Enter Correct Credentials !!!");
    }
  };
  return (
    <div>
      <div style={header}></div>
      <div style={container as React.CSSProperties}>
        <div style={profileIcon}>
          <Avatar style={avatar} src="/broken-image.jpg" />
        </div>
        <div style={heading as React.CSSProperties}>Welcome</div>
        <div style={textField as React.CSSProperties}>
          <Person2OutlinedIcon style={filedIconStyle} />
          <TextField
            placeholder="User Name"
            variant="standard"
            value={userName}
            onChange={(e: any) => setuserName(e.target.value)}
          />
        </div>
        <div style={textField as React.CSSProperties}>
          <LockIcon style={filedIconStyle} />
          <TextField
            type="password"
            placeholder="Password"
            variant="standard"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={buttonContainer}
          onClick={() => validateUser(userName, password)}
        >
          <button style={buttonStyles}>
            <h3>Login</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
