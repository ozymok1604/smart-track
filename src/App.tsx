import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
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
          <Route key="/" path="/smart/" element={<Dashboard />} />
          <Route key="/stuff" path="/smart/stuff" element={<Stuff />} />
          <Route key="/allerts" path="/smart/allerts" element={<Allerts />} />
          <Route
            key="/sequence"
            path="/smart/sequence"
            element={<Sequence />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
