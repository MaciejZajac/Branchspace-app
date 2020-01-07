import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="list">
      {mockArr ? (
        mockArr.map((item, index) => {
          return <ListItem item={item} key={index} />;
        })
      ) : (
        <div className="list__empty">None location selected</div>
      )}
    </div>
  );
};
const mockArr = [
  {
    location: "kraków"
  },
  {
    location: "london"
  }
];

export default List;
