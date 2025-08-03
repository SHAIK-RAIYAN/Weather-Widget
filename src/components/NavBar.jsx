import "./NavBar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar position="static" className="navbar" elevation={0}>
      <Toolbar className="toolbar">
        <Typography variant="h3" component="div" className="title">
          Weather Widget
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
