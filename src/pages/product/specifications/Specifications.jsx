import { useEffect, useState } from "react";
import "./Specifications.css";

const Specifications = (props) => {

  const [specs, setSpecs] = useState({});

  useEffect(() => {
    const initializeSpecs = () => {
      const specsData = {
        Battery: validateSpec(props.product.battery),
        "Primary Camera": validateSpec(props.product.primaryCamera),
        "Secondary Camera": validateSpec(props.product.secondaryCmera),
        Dimentions: validateSpec(props.product.dimentions),
        Bluetooth: validateSpec(props.product.bluetooth),
        RAM: validateSpec(props.product.ram),
        CPU: validateSpec(props.product.cpu),
        System: validateSpec(props.product.os),
        Weight: validateSpec(props.product.weight),
        "Display Size": validateSpec(props.product.displaySize),
      };
      return specsData;
    };
    setSpecs(initializeSpecs);
  }, [props]);

  const validateSpec = (spec) => {
    if (!spec || spec === "-") {
      return null;
    }
    if (Array.isArray(spec)) {
      return spec.map((item, index) => `${index !== 0 ? " -" : ""} ${item}`);
    }
    return spec;
  };

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
          {Object.entries(specs).map(([specTitle, specValue]) => (
            <tr key={specTitle}>
              <td>{specTitle}</td>
              <td>{specValue ? specValue : "Not specified"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
