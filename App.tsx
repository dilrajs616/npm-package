import React, { useState } from "react";
import PunjabiVoiceSearch from "./PunjabiVoiceSearch";

export default function App() {
  const [state, setState] = useState();
  console.log(state);
  return (
    <PunjabiVoiceSearch
      initials={true}
      state={state}
      setState={setState}
      micSize={50}
    />
  );
}
