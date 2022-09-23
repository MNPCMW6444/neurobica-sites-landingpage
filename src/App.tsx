import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import { useEffect, useState } from "react";
import logo from "./logo512.png";
import Michael from "./Michael";
import Michaelforreal from "./Michaelforreal";
import Mobile from "./Mobile";
import Nav from "./Nav";

const topbar = {
  backgroundColor: orange[100],
  width: "100vw",
  height: "50px",
};

const logoSx = {
  paddingLeft: "10px",
  height: "50px",
  width: "50px",
};

function App() {
  const [ismobile, setismobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <div style={{ overflowY: "scroll" }}>
      <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p> <p>asdas</p>
      <p>asdas</p>
      <p>asdas</p>
    </div>
  );
}

export default App;
