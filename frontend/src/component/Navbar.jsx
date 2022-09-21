import {
    AppBar,
    Toolbar,
    Typography,
    Button,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  import isAuth, { userType } from "../lib/isAuth";
  
  const Navbar = (props) => {
    let history = useNavigate();
  
    const handleClick = (location) => {
      console.log(location);
      history(location);
    };
  
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" 
          style={{flexGrow: 1}}
          >
            Job Portal
          </Typography>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;