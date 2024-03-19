import { useContext, useEffect, useState } from "react";
import "./Filter.css";
import { colors } from "../../assets/data/colors";
import { Link } from "react-router-dom";
import { ButtonState, PokeFilter } from "../../component/Context/Context";
import Search from "../../component/Search/Search";
import Back from "../../component/Svg/Back";

const Filter = () => {
  const { button, setButton } = useContext(ButtonState);
  const { pokeFilter, setPokeFilter } = useContext(PokeFilter);

  // State für die Daten aller gefetchten Types:
  const [typeData, setTypeData] = useState();

  // State für URL des angeklickten Types - deren Daten werden in einem weiteren State gefetcht und gespeichert:
  const [typeURL, setTypeURL] = useState("");

  // State für die Daten des einzelnen Typs, die mit typeURL gefetcht werden:
  const [type, setType] = useState("");

  // Array für gefetchte Detail-URLs
  const urlArray = [];

  // Fetch aller Types:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypeData(data))
      .catch((err) => console.log("filter data fetch", err));
  }, []);

  // Fetch der Daten des einzelnen, angeklickten types:
  useEffect(() => {
    if (typeURL !== "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((singleData) => setType(singleData));
    }
  }, [typeURL]);

  useEffect(() => {
    type?.pokemon?.map((item) => {
      urlArray.push(item.pokemon.url);
      setPokeFilter(urlArray);
    });
  }, [type]);

  return (
    <section className="filter">
      <Back />
      <h2>Type</h2>

      <div>
        {typeData ? (
          typeData.results.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setTypeURL(item.url);
                setButton(true);
              }}
              style={{ backgroundColor: colors[item.name] }}
            >
              {item.name}
            </button>
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
      <Link to="/">Search</Link>
    </section>
  );
};

export default Filter;
