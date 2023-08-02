import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SideBarMenu } from "./layouts/SideBarMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Stuff } from "./Pages/Stuff";
import { Allerts } from "./Pages/Allerts";
import { Sequence } from "./Pages/Sequence";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/allerts" element={<Allerts />} />
          <Route path="/sequence" element={<Sequence />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
