import "./Specifications.css";

const Specifications = (props) => {
  const {
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions,
    bluetooth,
    ram,
    cpu,
    os,
    weight,
    displaySize,
  } = props.product;

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
          <tr>
            <td>CPU</td>
            <td>{cpu ? cpu : "None"}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{ram ? ram : "None"}</td>
          </tr>
          <tr>
            <td>Display Size</td>
            <td>{displaySize ? displaySize : "No information"}</td>
          </tr>
          <tr>
            <td>Dimentions</td>
            <td>{dimentions ? dimentions : "No information"}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{weight ? weight : "No information"}</td>
          </tr>
          <tr>
            <td>Bluetooth</td>
            <td>{bluetooth ? bluetooth : "None"}</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>{battery ? battery : "No information"}</td>
          </tr>
          <tr>
            <td>Primary Camera</td>
            <td>{primaryCamera ? primaryCamera : "None"}</td>
          </tr>
          <tr>
            <td>Secondary Camera</td>
            <td>{secondaryCamera ? secondaryCamera : "None"}</td>
          </tr>
          <tr>
            <td>OS</td>
            <td>{os ? os : "No information"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specifications;
