import React from "react";
import Search from "./components/Search";
import List from "./components/List";
import Map from "./components/Map";

const App = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__core">
          <div className="home__search">
            <h4 className="home__title">Type a location</h4>
            <Search />
          </div>
          <div className="home__list">
            <h4 className="home__title">Selected locations</h4>
            <List />
          </div>
        </div>
        <div className="home__map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
