import React, { useState } from "react";

import Input from "../Input";

import "./styles.scss";

const TEMP = {
  value: "",
};

const App = () => {
  const [temp, setTemp] = useState(TEMP);
  const handleChange = (e) => {
    const val = e.target.value;
    const updatedVal = { ...temp };
    updatedVal.value = val;
    setTemp(updatedVal);
  };
  return (
    <div className="App">
      <Input
        type="text"
        label="label"
        value={temp.value}
        handleChange={handleChange}
      />
      <Input
        type="password"
        label="label"
        value={temp.value}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
