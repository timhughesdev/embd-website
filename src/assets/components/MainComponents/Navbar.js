import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  ButtonBase,
  Button,
  MenuItem,
  Paper,
  MenuList,
  Fab,
  Popper,
  ClickAwayListener,
} from "@mui/material";
import embdLogo from "../../images/embd-logo-black.png";
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navMap = [
  {
    name: "About",
    menuItems: [
      {
        name: "Teacher Profiles",
        to: "/Teacher-Profiles#teacherprofiles",
      },
      { name: "Benefits of Dance", to: "/Benefits-Of-Dance#benefitsofdance" },
      { name: "Styles of Dance", to: "/Styles-Of-Dance#stylesofdance" },
      { name: "Studio Policy", to: "/Studio-Policy#studiopolicy" },
    ],
  },
  {
    name: "Services",
    menuItems: [
      { name: "Social Dance", to: "/Social-Dance#socialdance" },
      { name: "Private Dance", to: "/Private-Dance#privatedance" },
      { name: "Wedding Dance", to: "/Wedding-Dance#weddingdance" },
    ],
  },
  {
    name: "The Buzz",
    menuItems: [{ name: "Testimonials", to: "/Testimonials#testimonials" }],
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [subMenu, setSubMenu] = React.useState([]);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box id="home">
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: "flex", sm: "flex", lg: "flex", xl: "flex" },
            alignItems: "stretch",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          disableGutters
        >
          <ButtonBase
            component={HashLink}
            to="/"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              minWidth: "420px",
            }}
          >
            <img src={embdLogo} alt="dance logo" />
          </ButtonBase>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button component={RouterLink} to="/">
              <Typography sx={{ color: "black", fontSize: "16px" }}>
                Home
              </Typography>
            </Button>
            {navMap.map((obj) => (
              <Button
                key={obj.name}
                onClick={(event) => {
                  setAnchorElNav(event.currentTarget);
                  setSubMenu(obj.menuItems);
                }}
                sx={{
                  whiteSpace: "noWrap",
                  color: "black",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                {obj.name}
              </Button>
            ))}
            <Button component={HashLink} to="/Contact#contact">
              <Typography
                sx={{ color: "black", fontSize: "16px", whiteSpace: "nowrap" }}
              >
                Contact Us
              </Typography>
            </Button>
            <Popper
              sx={{
                boxShadow: "9px 9px 15px grey",
              }}
              disableScrollLock={true}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              size="large"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNavMenu}>
                  <MenuList>
                    {subMenu.map((subObj) => {
                      return (
                        <MenuItem
                          onClick={handleCloseNavMenu}
                          position="static"
                          component={HashLink}
                          to={subObj.to}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: "Poppins",
                            fontWeight: "400",
                            fontSize: "22px",
                          }}
                          size="large"
                        >
                          {subObj.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Popper>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Fab
              component={HashLink}
              to="/Contact#contact"
              sx={{
                whiteSpace: "nowrap",
              }}
              variant="extended"
              size="medium"
              color="secondary"
              aria-label="add"
            >
              book your first lesson
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{
          height: "68.5px",
          justifyContent: "center",
          display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
        }}
        color="transparent"
        position="static"
      >
        <Typography
          sx={{
            fontFamily: "tangerine",
            fontWeight: "500",
            letterSpacing: "5px",
            wordSpacing: "10px",
          }}
          align="center"
          variant="h2"
          marginTop="8px"
        >
          Welcome to the world of Ballroom Dance
        </Typography>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
