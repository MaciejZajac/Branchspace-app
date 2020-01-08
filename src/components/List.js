import React from "react";
import { useSelector } from "react-redux";
import { SPlacesArr } from "../selectors";

import ListItem from "./ListItem";

const List = () => {
  const placesArr = useSelector(SPlacesArr);

  return (
    <div className="list">
      {placesArr && placesArr.length > 0 ? (
        placesArr.map((item, index) => {
          return <ListItem item={item} key={index} />;
        })
      ) : (
        <div className="list__empty">None location selected</div>
      )}
    </div>
  );
};

export default List;
