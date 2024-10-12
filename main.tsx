import React from "react";
import ReactDOM from "react-dom/client";

import PunjabiVoiceSearch from "./PunjabiVoiceSearch";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PunjabiVoiceSearch searchType={"gurbani"} micSize={50} />
  </React.StrictMode>
);
