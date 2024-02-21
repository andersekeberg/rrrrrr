import React from "react";
import "./application.css";
import { ErnaNews, HaalandNews } from "./ernaNews";
import { Content } from "./content";
import { Link } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { ErnaNews } from "./ernaNews";

export function Application() {
  return (
    <div id={"container"}>
      <header>
        <h1>Min Avis</h1>
      </header>

      <nav>
        <Link to={"/"}>
          <h2>Front Page</h2>
        </Link>
      </nav>

      <footer>Dette var min avis</footer>

      <Routes>
        <Route path={"/ernaNews"} element={<ErnaNews />} />
        <Route path={""} element={<Content />} />
        <Route path={"/haalandnews"} element={<HaalandNews />} />
      </Routes>
    </div>
  );
}
