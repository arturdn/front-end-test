import "./Select.css";

const Select = ({ label, options, id, onChange }) => (
  <label className="selectActionLabel">
    {label}
    <select
      id={id}
      onChange={(e) => onChange(e)}
      className="selectActionOptions"
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </label>
);

export default Select;