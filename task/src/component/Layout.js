import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Logo from "./Logo";

export default function Layout() {
  return (
    <>
      <Nav />
      <Logo />

      {/* <Login/> */}
    </>
  );
}
