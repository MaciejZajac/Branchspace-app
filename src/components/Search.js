import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
const Search = () => {
  const [input, setInput] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(undefined);

  const handleSelect = async input => {
    const result = await geocodeByAddress(input);
    const latLng = await getLatLng(result[0]);

    const newRecord = {
      location: result[0].formatted_address,
      coordinates: latLng
    };

    setSelectedRecord(newRecord);
  };
  const handleClick = () => {
    console.log("selectedRecord", selectedRecord);
  };
  return (
    <div className="flex flex--nowrap" style={{ paddingRight: "25px" }}>
      <PlacesAutocomplete
        value={input}
        onChange={setInput}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div style={{ position: "relative", width: "100%" }}>
            <div className="search__container">
              <input
                className="search__input"
                {...getInputProps({ placeholder: "Type location" })}
              />
            </div>

            <div className="search__suggestion-box">
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#d1d1d1" : "#fff"
                };
                return (
                  <div
                    className="search__suggestion"
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={index}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button type="button" className="search__btn" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
};

export default Search;
