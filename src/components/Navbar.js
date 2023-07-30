import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material"; //manages the layout of its immediate children, with optimal spacingand dividersbetween children. (menu,list of items)
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          styles={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px Solid #FF2625",
          }}
        >
          Home
        </Link>
        {/* On click this will scroll down to exercises part. */}
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
        <a href="#diet" style={{ textDecoration: "none", color: "#3A1212" }}>
          Diet
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
