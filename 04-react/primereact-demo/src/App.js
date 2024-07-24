import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import Menu from './Menu';

function App() {
  const [value, setValue] = useState(null);

  return (
    <div className="card">
      <Menu />

      <div className="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
        <label>{String(value)}</label>
      </div>
    </div>
  );
}

export default App;