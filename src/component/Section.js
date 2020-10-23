import React from "react";
import Param from "./Param";

const Section = ({ sectionName, params }) => {
  return (
    <>
      <div>{sectionName}</div>
      {params.map(({ id, name, initValue, ex }) => (
        <Param key={id} name={name} initValue={initValue} ex={ex} />
      ))}
    </>
  );
};
export default Section;
