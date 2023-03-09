function SelectCountry({ countrys, setCountry }) {
  return (
    <select
      title="countrys"
      name="countrys"
      id="countrys"
      onChange={(event) => {
        setCountry(event.target.value);
      }}
    >
      <option value="" disabled>
        Select country
      </option>
      <option value="aboba">All</option>
      {countrys.map((c) => {
        return (
          <option key={Math.floor(Math.random() * Date.now())} value={c}>
            {c}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCountry;
