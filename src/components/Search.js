import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { AAddPlace } from "../actions";
import { SPlacesArr } from "../selectors";

const Search = () => {
  const [input, setInput] = useState("");
  const [inputErr, setInputErr] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(undefined);

  const dispatch = useDispatch();
  const currectRecords = useSelector(SPlacesArr);

  const handleSelect = async input => {
    setInputErr("");
    const result = await geocodeByAddress(input);
    const latLng = await getLatLng(result[0]);
    const newRecord = {
      location: result[0].formatted_address,
      coordinates: latLng
    };
    setInput(result[0].formatted_address);

    setSelectedRecord(newRecord);
  };
  const handleClick = () => {
    if (!selectedRecord) {
      setInputErr("Select place from a list");
      return;
    }
    setInput("");
    if (
      currectRecords.find(item => item.location === selectedRecord.location)
    ) {
      return;
    }
    setSelectedRecord(undefined);
    dispatch(AAddPlace(selectedRecord));
  };
  return (
    <>
      <div className="flex flex--nowrap" style={{ paddingRight: "25px" }}>
        <PlacesAutocomplete
          value={input}
          onChange={setInput}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
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
      {inputErr && <div className="search__error">{inputErr}</div>}
    </>
  );
};

export default Search;
