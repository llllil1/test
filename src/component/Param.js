import React, { useState } from "react";

const Param = ({ name, ex, initValue }) => {
  const [value, setVaule] = useState(initValue);

  const onChange = (e) => {
    setVaule(e.target.value);
  };

  return (
    <>
      <div>{name} </div>
      <input
        onChange={onChange}
        name={name}
        value={value}
        placeholder={`ex) ${ex}`}
      />
    </>
  );
};
Param.defaultProps = {
  initValue: ""
};
export default Param;
