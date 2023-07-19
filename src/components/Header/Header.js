import {
  Typography,
  Card,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Button,
  Box,
  Input,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./style.css";

const HeaderTemplate = () => {
  const [open, setOpen] = useState(false);
  const text = <Typography color="white">Search</Typography>;
  console.log(text);
  return (
    <AppBar>
      <Toolbar>
        <Box
          // borderRadius={7}
          border={1}
          borderColor={"yellow"}
          padding={1}
          width={"5%"}
          justifyContent={"center"}
        >
          <IconButton color="inherit">
            <LocalMoviesRoundedIcon />
            <Typography>MMDB</Typography>
          </IconButton>
        </Box>
        <IconButton color="inherit">
          <MenuIcon onClick={() => setOpen(!open)} sx={{ marginLeft: 1 }} />
        </IconButton>
        {open && (
          <ul className="menu">
            <li className="menu-item">
              <button>Menu 1</button>
            </li>
            <li className="menu-item">
              <button>Menu 2</button>
            </li>
          </ul>
        )}

        <Typography sx={{ flexGrow: 1 }}>Menu</Typography>
        {/* <TextField
          id="outlined-basic"
          label={text}
          variant="outlined"
          color="secondary"
          sx={{ border: 1, borderRadius: 2, height: 20 }}
        /> */}
        <Input
          type="search"
          placeholder="Search"
          sx={{
            // border: 1,
            // borderRadius: 2,
            height: 30,
            width: "10%",
            color: "white",
            flexGrow: 1,
          }}
        />

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderTemplate;
