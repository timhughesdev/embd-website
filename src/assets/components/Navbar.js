import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fab,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Menu";
import embdLogo from "../images/embd-logo-black.png";
import { Rowing } from "@mui/icons-material";

// const pages = ["Home", "About", "Services", "The Buzz", "Contact Us"];
// variable navMap that holds an array of objects
// onClick on each button. Sets the ref that the button is tied to
const navMap = [
  {
    name: "Home",
  },
  {
    name: "About",
    menuItems: [
      { name: "Social Dance" },
      { name: "Private Dance" },
      { name: "Wedding Dance" },
    ],
  },
  {
    name: "Services",
    menuItems: [
      { name: "Teacher Profiles" },
      { name: "Benefits of Dance" },
      { name: "Styles of Dance" },
      { name: "Studio Policy" },
    ],
  },
  {
    name: "The Buzz",
  },
  {
    name: "Contact Us",
    menuItems: [{ name: "Testimonials" }],
  },
];

// navMap.map(obj => { obj.menuItems.map

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [subMenu, setSubMenu] = React.useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar position="static">
        {/* <Container maxWidth="lg"> */}
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex" } }}>
            {/* How do I change the logo to a set width and height as sx prop isn't working */}
            <img
              src={embdLogo}
              alt="dance logo"
              sx={{ height: "58px", width: "338" }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {navMap.map((obj) => (
              <Button
                key={obj.name}
                onClick={(event) => {
                  setAnchorElNav(event.currentTarget);
                  setSubMenu(obj.menuItems);
                }}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {obj.name}
              </Button>
            ))}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {subMenu.map((subObj) => {
                return <MenuItem>{subObj.name}</MenuItem>;
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              width: "385px",
              justifyContent: "flex-end",
              display: "flex",
            }}
          >
            <Fab
              variant="extended"
              size="medium"
              color="secondary"
              aria-label="add"
            >
              {/* <NavigationIcon sx={{ mr: 1 }} /> */}
              book your first lesson
            </Fab>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <AppBar
        sx={{ height: "68.5px", justifyContent: "center" }}
        color="transparent"
        position="static"
      >
        <Typography
          sx={{ fontFamily: "tangerine", fontWeight: "600" }}
          align="center"
          variant="h2"
          top="20px"
        >
          Welcome to the world of Ballroom Dance
        </Typography>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
// TODO: Text black, background transparent, button grey/blue, link the nav buttons
