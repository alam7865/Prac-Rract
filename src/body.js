// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import { restaurantList } from "./constant";
// // import Shimmer from "./shimmer";

// // // const RestaurantCard = ({ props }) => {
// // //   console.log("hello" + props);
// // //   // return (
// // //   //   <div className="Card">
// // //   //     <>
// // //   //       <img src="https://www.foodandwine.com/thmb/-YlAbgibH2UAoArlUMUip0r9Rys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/One-Pot-Lemongrass-Chicken-and-Coconut-Rice-Is-a-Stunner-FT-RECIPE0224-3819b7368af44fd394ba07e9c1c04444.jpg"></img>
// // //   //       <h3>{restaurantList[0]?.info?.name}</h3>
// // //   //       <h3>{restaurantList[0].info.avgRating}</h3>
// // //   //       <h3>{restaurantList[0].info.cuisines.join(",")}</h3>
// // //   //     </>
// // //   //   </div>
// // //   // );

// // //   return (
// // //     <div className="Card">
// // //       <>
// // //         <img src="https://www.foodandwine.com/thmb/-YlAbgibH2UAoArlUMUip0r9Rys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/One-Pot-Lemongrass-Chicken-and-Coconut-Rice-Is-a-Stunner-FT-RECIPE0224-3819b7368af44fd394ba07e9c1c04444.jpg"></img>
// // //         <h3>{props?.info?.name}</h3>
// // //         <h3>{props?.info?.avgRating}</h3>
// // //         <h3>{props?.info?.cuisines?.join(",")}</h3>
// // //       </>
// // //     </div>
// // //   );
// // // };

// // /////////////////////////// whole element passed //////////////////////////////

// // const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
// //   // console.log("hello" + restaurants);
// //   return (
// //     <div className="Card">
// //       {/* <img
// //         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/}+`};
// //         alt={name}
// //       /> */}
// //       <img
// //         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/${cloudinaryImageId}`}
// //       ></img>
// //       <h3>{name}</h3>
// //       <h3>{avgRating} *</h3>
// //       <h3>{cuisines.join(", ")}</h3>
// //     </div>
// //   );
// // };

// // // const BodyCom = () => {
// // //   // return <RestaurantCard props={restaurantList[0]} />;
// // //   // return <RestaurantCard restaurants={restaurantList} />;
// // //   {
// // //     restaurantList.map((restaurant) => {
// // //       return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
// // //     });
// // //   }
// // // };

// // ////////////////////////////// testing ///////////////////

// // const handleClick = () => {
// //   if (searchText === "True") {
// //     setsearchText = "False";
// //   } else {
// //     searchText = "True";
// //   }
// // };
// // const search = () => {
// //   const [searchText, setsearchText] = useState("True");

// //   const handleClick = () => {
// //     if (searchText === "True") {
// //       setsearchText = "False";
// //     } else {
// //       searchText = "True";
// //     }
// //   };

// //   return (
// //     <>
// //       <h1>Search: {searchText}</h1>
// //       <button onClick={handleClick}>Click</button>
// //     </>
// //   );
// // };

// // const BodyCom = () => {
// //   useEffect(() => {
// //     setTimeout(() => {
// //       setRestaurants(restaurantList); // Simulating data fetch
// //     }, 2000); // Show shimmer for 2 seconds
// //   }, []);

// //   return (
// //     <>
// //       <search />
// //       <div className="BodyBox">
// //         if(restaurant.length==0)
// //         {<Shimmer />}
// //         else
// //         {restaurantList.map((restaurants) => {
// //           return (
// //             <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
// //           );
// //         })}
// //         {/* {restaurantList.map((restaurants) => {
// //           return (
// //             <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
// //           );
// //         })} */}
// //       </div>
// //     </>
// //   );
// // };
// // module.exports = { BodyCom };

// /////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { restaurantList } from "./constant";
// import Shimmer from "./shimmer";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
//   return (
//     <div className="Card">
//       <img
//         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/${cloudinaryImageId}`}
//         alt={name}
//       />
//       <h3>{name}</h3>
//       <h3>{avgRating} *</h3>
//       <h3>{cuisines.join(", ")}</h3>
//     </div>
//   );
// };

// // ✅ Fixing search component (renamed to SearchComponent)
// // const SearchComponent = () => {
// //   const [searchText, setSearchText] = useState("True");

// //   const handleClick = () => {
// //     setSearchText(searchText === "True" ? "False" : "True");
// //   };

// //   return (
// //     <>
// //       <h1>Search: {searchText}</h1>
// //       <button onClick={handleClick}>Click</button>
// //     </>
// //   );
// // };

// //////////////// Search Bar /////////////////
// const SearchComponent = () => {
//   let [searchText, setsearchText] = useState();

//   function filterData(searchText, restaurants) {
//     const filterData = restaurants.filter((restaurants) => {
//       restaurants.data.includes(searchText);
//     });

//     return filterData;
//   }
//   return (
//     <>
//       <h1>Search Bar</h1>
//       <input
//         type="text"
//         onChange={(e) => {
//           searchText = e.target.value;
//           const data = filterData(searchText, restaurants);
//           setsearchText = data;
//           console.log(setsearchText);
//           console.log(searchText);
//         }}
//       ></input>
//       <button onClick={filterData}>Click</button>
//     </>
//   );
// };

// const BodyCom = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   // Simulate API call with useEffect
//   useEffect(() => {
//     setTimeout(() => {
//       setRestaurants(restaurantList); // Simulating data fetch
//     }, 2000); // 2-second delay
//   }, []);

//   return (
//     <>
//       <SearchComponent />
//       <div className="BodyBox">
//         {restaurants.length === 0 ? (
//           <Shimmer /> // ✅ Show shimmer while loading
//         ) : (
//           restaurants.map((restaurant) => (
//             <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// // Exporting correctly
// export { BodyCom };

//////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./constant";
import Shimmer from "./shimmer";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="Card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288/${cloudinaryImageId}`}
        alt={name}
      />
      <h3>{name}</h3>
      <h3>{avgRating} *</h3>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

const SearchComponent = ({ setFilteredRestaurants, restaurants }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const BodyCom = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }, 2000);
  }, []);

  return (
    <>
      <SearchComponent
        setFilteredRestaurants={setFilteredRestaurants}
        restaurants={restaurants}
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
