import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACloseActiveRecord, ASetActiveRecord } from "../actions";
import { SActiveRecord } from "../selectors";
const ListItem = ({ item }) => {
  const dispatch = useDispatch();
  const activeRecord = useSelector(SActiveRecord);

  const handleClick = item => {
    if (activeRecord && activeRecord.location === item.location) {
      dispatch(ACloseActiveRecord());
    } else {
      dispatch(ASetActiveRecord(item));
    }
  };

  return (
    <div className="list__item">
      <div className="list__item-content">
        {item.location}
        {activeRecord && activeRecord.location === item.location && (
          <>
            <div className="list__details">
              Longitude: {item.coordinates.lng}
              <br />
              Latitude: {item.coordinates.lat}
            </div>
          </>
        )}
      </div>
      <div
        className={`list__item-showmore ${activeRecord &&
          activeRecord.location === item.location &&
          "list__item-showmore--up"}`}
        onClick={() => handleClick(item)}
      />
    </div>
  );
};

export default ListItem;
