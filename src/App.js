import React from "react";
import data from "../json/data.json";
import Simul from "./component/Simul";
const simulStyle = {
  backgroundColor: "white",
  border: "1px solid black",
  padding: "3px"
};
export default function App() {
  return (
    <>
      <Simul data={data} style={simulStyle} />
    </>
  );
}
