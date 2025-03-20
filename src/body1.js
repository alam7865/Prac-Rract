import react, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { resturentList } from "./constant";
import Shimmer from "./shimmer";

const RestaurantCard = ({ name, cusines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="Card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/${cloudinaryImageId}`}
        alt={name}
      ></img>

      <h3>{name}</h3>
      <h3>{avgRating} *</h3>
      <h3>{cusines.join(", ")}</h3>
    </div>
  );
};

const BodyCom = () => {
  const [resturents, setResturents] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setResturents(resturentList);
      setFilteredRestaurants(resturentList);
    }, 2000);
  }, []);

  return (
    <>
      <SearchComponent
        setFilteredRestaurants={setFilteredRestaurants}
        setResturents={setResturents}
      />

      <div className="BodyBox">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))
        )}
      </div>
    </>
  );
};

export { BodyCom };
