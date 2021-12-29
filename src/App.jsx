import React,{useEffect} from "react";
import ApplicationRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <ApplicationRoutes></ApplicationRoutes>
    </BrowserRouter>
  );
}

export default App;
