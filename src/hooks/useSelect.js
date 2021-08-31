import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // state del hook

  const [state, setState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {opciones.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
