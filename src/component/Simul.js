import React from "react";
import Section from "./Section";

const Simul = ({ data, style }) => {
  const { serverInfo, section } = data[0];
  console.log(serverInfo);
  return (
    <div style={style}>
      {section.map(({ id, sectionName, params }) => (
        <Section key={id} sectionName={sectionName} params={params} />
      ))}
    </div>
  );
};
export default Simul;
