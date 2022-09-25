import "./authStyle.css";
import LoginPageSignInSignUpStyle from "./authStyle";
import NeurobicaLogo from "./NeurobicaLogo";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { passwordStrength } from "check-password-strength";
/* import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3"; */
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/Email";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Signin from "./Signin";
import SignupReq from "./SignupReq";
import Badge from "@mui/icons-material/Badge";
import Lock from "@mui/icons-material/Lock";
import SignupFin from "./SignupFin";

export default function IM() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordagain] = useState("");
  const [label, setLabel] = useState<string>(
    isSignIn ? "Sign In" : "Continiue"
  );

  const [state, setState] = useState<{
    checkedA: boolean;
    checkedB: boolean;
    checkedF: boolean;
    checkedG: boolean;
  }>({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [state2, setState2] = useState<{
    checkedA: boolean;
    checkedB: boolean;
    checkedF: boolean;
    checkedG: boolean;
  }>({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState2({ ...state, [event.target.name]: event.target.checked });
  };

  const emailValidation =
    email.includes("+") ||
    !(
      email.includes("@") &&
      email.indexOf("@") !== 0 &&
      email.indexOf("@") !== email.length - 1
    );

  console.log(email.indexOf("@"));
  console.log(email.indexOf("@"));

  const passwordValidation =
    passwordStrength(password).value === "Strong" ||
    passwordStrength(password).value === "Medium";

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <NeurobicaLogo height="180px" width="280px" />
      </Grid>
      <Grid item>
        <Box className="loginPageSignInSignUp">
          <ToggleButtonGroup value={isSignIn}>
            <ToggleButton
              onClick={() => {
                setIsSignIn(true);
                setLabel("Login");
              }}
              sx={
                isSignIn
                  ? LoginPageSignInSignUpStyle.selected
                  : LoginPageSignInSignUpStyle.unselected
              }
              value="signin"
            >
              {isSignIn ? "Login" : "Already Registred?"}
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setIsSignIn(false);
                setLabel("Register");
              }}
              sx={
                isSignIn
                  ? LoginPageSignInSignUpStyle.unselected
                  : LoginPageSignInSignUpStyle.selected
              }
              value="signup"
            >
              {isSignIn ? "Not Registred?" : "Register"}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
      {isSignIn ? (
        <>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={emailValidation && !!email}
              id="sandard-basic"
              variant="standard"
              type="email"
              label={
                email.includes("+")
                  ? "Email Address mustn't include '+'"
                  : !(
                      email.includes("@") &&
                      email.indexOf("@") !== 0 &&
                      email.indexOf("@") !== email.length - 1
                    ) && !!email
                  ? "Email Address must include '@'"
                  : "Email Address"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              value={email}
              placeholder="Enter Your Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={!passwordValidation}
              id="tandard-basic"
              variant="standard"
              type="password"
              label={
                passwordValidation === false
                  ? "Password must include 8 character or more and include at least 1 lowercase, uppercase, number and symbol charactors"
                  : "Password"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={emailValidation && !!email}
              id="sandard-basic"
              variant="standard"
              type="email"
              label={
                email.includes("+")
                  ? "Email Address mustn't include '+'"
                  : !(
                      email.includes("@") &&
                      email.indexOf("@") !== 0 &&
                      email.indexOf("@") !== email.length - 1
                    ) && !!email
                  ? "Email Address must include '@'"
                  : "Email Address"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              value={email}
              placeholder="Enter Your Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={false}
              type="text"
              variant="standard"
              label="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge />
                  </InputAdornment>
                ),
              }}
              value={fullname}
              placeholder="Enter Your Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={!passwordValidation}
              type="password"
              variant="standard"
              label="key"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={key}
              placeholder="Enter Your Key (check you email inbox)"
              onChange={(e) => setKey(e.target.value)}
            />{" "}
          </Grid>
          <Grid item>
            {" "}
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={false}
              type="password"
              variant="standard"
              label={
                passwordValidation === false
                  ? "Password must include 8 character or more and include at least 1 lowercase, uppercase, number and symbol charactors"
                  : "Password"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{
                m: 0,
                width: "40vh",
              }}
              error={password !== passwordagain}
              type="password"
              variant="standard"
              label="Confirm Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              value={passwordagain}
              placeholder="Confirm Your Password"
              onChange={(e) => {
                setPasswordagain(e.target.value);
              }}
            />

            <Grid container>
              <Grid item>
                {" "}
                <FormControlLabel
                  label={
                    <Box>
                      <span>I accept the </span>
                      {/*  <Link to={"/termsvf"}>
                          terms of use and privacy policy
                        </Link> */}
                      <Box>terms of use and privacy policy</Box>
                    </Box>
                  }
                  sx={{
                    color: "GrayText",
                    width: "35vh",
                  }}
                  control={
                    <Checkbox
                      sx={{
                        fontSize: "28",
                      }}
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="default"
                      size="small"
                    />
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
      {/*  <Grid item xs={4}>
        <GoogleReCaptchaProvider reCaptchaKey="6LcrTYUhAAAAALcocJuPUztaWEIAsY_DdAuRxx8b">
          <GoogleReCaptcha
            onVerify={() => {
              setSsAllowedToSignIn(true);
            }}
          />
        </GoogleReCaptchaProvider>
      </Grid> */}
      <Grid item>
        <Button
          disabled={emailValidation}
          color="inherit"
          variant="outlined"
          sx={{
            color: "#FF8B17",
            width: "45vh",
            height: "6vh",
            borderRadius: "30px",
          }}
          onClick={() => setLabel(isSignIn ? "Logging In..." : "Registring...")}
        />
      </Grid>

      {label === "Logging In..." && (
        <Grid item>
          <Signin email={email} password={password} setLabel={setLabel} />
        </Grid>
      )}
      {label === "Registring..." && (
        <Grid item>
          <SignupFin
            setLabel={setLabel}
            email={email}
            secretKey={key}
            fullname={fullname}
            password={password}
            passwordagain={passwordagain}
          />
        </Grid>
      )}
    </Grid>
  );
}
