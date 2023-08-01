import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { SideBarMenu } from "./Components/SideBarMenu";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBarMenu />
      </div>
    </Provider>
  );
}

export default App;
