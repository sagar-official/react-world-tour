const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(true);
    setVisited(!visited);
  };


  return (
    <div className={`country ${visited ? "visited" : "none-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>

      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />

      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
      {/* {visited && "I have visited this Country"} */}
      {visited ? "I have visited this Country" : "I want to visit"}
    </div>
  );
};
import { useState } from "react";
import "./Country.css";
export default Country;
