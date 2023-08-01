export const Filter = ({value, onChange}) => (
  <label>
    Filter by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
