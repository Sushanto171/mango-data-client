import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route,  Routes } from "react-router";
import AddMangos from "./compontents/AddMangos.jsx";
import UpdateItem from "./compontents/UpdateItem.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mangos" element={ <AddMangos />} />
        <Route path="/update/:id" element={ <UpdateItem />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
