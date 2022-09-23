import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Nav from "./Nav";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Michaelforreal from "./Michaelforreal";
import logo from "./logo512.png";
import Divider from "@mui/material/Divider";

const drawerWidth = 150;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  actions: any;
}

const logoSx2 = {
  marginLeft: "10px",
  height: "130px",
  width: "130px",
};

const logoSx = {
  position: "fixed",
  top: "0px",
  left: "70px",
  height: "60px",
  width: "50px",
  zIndex: 104,
};

export default function Mobile(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ backgroundColor: orange[100], height: "100vh" }}>
      <Box component="img" src={logo} sx={logoSx2}></Box>
      <Divider />
      <Box sx={{ paddingTop: "17px" }}></Box>
      <Nav dir="column" actions={props.actions} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box component="img" src={logo} sx={logoSx}></Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: orange[100],
            height: "60px",
          }}
        >
          <Toolbar sx={{ margin: "5px" }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: "black", mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Button sx={{ color: orange[200], fontSize: "1.5rem" }}>
                  N e u r o b i c a
                </Button>
              </Grid>
              <Grid item>
                <Michaelforreal />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}