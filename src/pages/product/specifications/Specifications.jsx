import { useRef } from "react";
import "./Specifications.css";

const Specifications = (props) => {
  const {
    battery,
    primaryCamera,
    secondaryCmera,
    dimentions,
    bluetooth,
    ram,
    cpu,
    os,
    weight,
    displaySize,
  } = props.product;

  const validateSpec = (spec) => {
    if (!spec || spec === "-") {
      return null;
    }
    if (Array.isArray(spec)) {
      return spec.map((item, index) => `${index !== 0 ? " -" : ""} ${item}`);
    }
    return spec;
  };

  const initializeSpecs = () => {
    const specsData = {
      Battery: validateSpec(battery),
      'Primary Camera': validateSpec(primaryCamera),
      'Secondary Camera': validateSpec(secondaryCmera),
      Dimentions: validateSpec(dimentions),
      Bluetooth: validateSpec(bluetooth),
      RAM: validateSpec(ram),
      CPU: validateSpec(cpu),
      System: validateSpec(os),
      Weight: validateSpec(weight),
      'Display Size': validateSpec(displaySize),
    };
    console.log(specsData);
    return specsData;
  };

  const specs = useRef(initializeSpecs());

  return (
    <div className="specsContainer">
      <table className="specsTable">
        <thead>
          <tr>
            <th>Specifications</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(specs.current).map(([specTitle, specValue]) => (
            <tr key={specTitle}>
              <td>{specTitle}</td>
              <td>{specValue ? specValue : "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
