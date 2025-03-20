import React from "react";
import ReactDOM from "react-dom/client";

// let restaurantList = [
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "242334",
//           name: "Baskin Robbins - Ice Cream Desserts",
//           city: "163",
//           slugs: {
//             restaurant: "baskin-robbins-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
//           address: "GoldighiMall,Nazirpatty,SilcharLocality,SilcharCity",
//           locality: "Nazirpatty",
//           areaName: "Silchar",
//           costForTwo: "30000",
//           costForTwoMessage: "₹300 FOR TWO",
//           cuisines: ["Desserts", "Beverages"],
//           avgRating: 4.7,
//           feeDetails: {},
//           avgRatingString: "4.7",
//           totalRatingsString: "1.1K+",
//           sla: {
//             deliveryTime: 46,
//             minDeliveryTime: 45,
//             maxDeliveryTime: 50,
//             lastMileTravel: 8.7,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "45-50 MINS",
//             lastMileTravelString: "8.7 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "TEMPORARILY",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {
//             imageBadges: [
//               {
//                 imageId: "v1695133679/badges/Pure_Veg111.png",
//                 description: "pureveg",
//               },
//             ],
//           },
//           unorderableMessage: "Temporarily closed for delivery",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_5",
//           availabilityServiceabilityMessage: "Temporarily closed for delivery",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Outlet not accepting orders at the moment",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "242334",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//             restaurant_id: "242334",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "618857",
//           name: "Kwality Walls Ice Cream and More",
//           city: "163",
//           slugs: {
//             restaurant:
//               "kwality-walls-frozen-dessert-and-ice-cream-shop-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_618857.JPG",
//           address:
//             "SHIVAS: OPP ISCKON MANDIR AMBICAPATTY, AMBICAPUR, PT-I, CACHAR SADAR, CACHAR, ASSAM - 788004 (HUL- 217079P73802)",
//           locality: "Ambicapatty",
//           areaName: "Tarapur",
//           costForTwo: "20000",
//           costForTwoMessage: "₹200 FOR TWO",
//           cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//           avgRating: 4.7,
//           feeDetails: {},
//           avgRatingString: "4.7",
//           totalRatingsString: "1.1K+",
//           sla: {
//             deliveryTime: 41,
//             minDeliveryTime: 40,
//             maxDeliveryTime: 45,
//             lastMileTravel: 8.7,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "40-45 MINS",
//             lastMileTravelString: "8.7 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 10:30 am, tomorrow",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR TODAY",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 10:30 am, tomorrow",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_5",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 10:30 am, tomorrow",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens tomorrow at 10:30 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "618857",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             restaurant_id: "618857",
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "366102",
//           name: "Bhola Shankar Food Industry",
//           city: "163",
//           slugs: {
//             restaurant: "bhola-shankar-food-industry-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId: "hqcygwyyx6h1fai6hyf2",
//           address:
//             "Ward No 22 Shop No 2B/1, Opp Abhijit Printer, Near Adarsha Academy, Ambikapotty, Silchar, Assam -788004",
//           areaName: "Tarapur",
//           costForTwo: "30000",
//           costForTwoMessage: "₹300 FOR TWO",
//           cuisines: ["Bakery", "Italian"],
//           avgRating: 4.2,
//           feeDetails: {},
//           avgRatingString: "4.2",
//           totalRatingsString: "169",
//           sla: {
//             deliveryTime: 55,
//             minDeliveryTime: 55,
//             maxDeliveryTime: 60,
//             lastMileTravel: 8.7,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "55-60 MINS",
//             lastMileTravelString: "8.7 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 9 am, today",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR NOW",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 9 am, today",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_5",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 9 am, today",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens today at 9:00 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "366102",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//             restaurant_id: "366102",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "481396",
//           name: "Oh Yes Biryani",
//           city: "163",
//           slugs: {
//             restaurant: "oh-yes-biryani-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId: "t39rweqcxish8snx8omy",
//           address:
//             "Ground floor, 5th building, Bonomali Bhavan, Premtala point ,Saidpur, Pt-I,Cachar Sadar,Cachar,Assam-788001\t",
//           locality: "Premtala point",
//           areaName: "Tarapur",
//           costForTwo: "42000",
//           costForTwoMessage: "₹420 FOR TWO",
//           cuisines: ["Biryani", "Momos", "Chinese", "Desserts"],
//           avgRating: 4,
//           feeDetails: {},
//           avgRatingString: "4.0",
//           totalRatingsString: "4.0K+",
//           sla: {
//             deliveryTime: 52,
//             minDeliveryTime: 50,
//             maxDeliveryTime: 55,
//             lastMileTravel: 8.6,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "50-55 MINS",
//             lastMileTravelString: "8.6 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 11:30 am, today",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR NOW",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 11:30 am, today",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_4",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 11:30 am, today",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens today at 11:30 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "481396",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//             restaurant_id: "481396",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "995598",
//           name: "Madno - House of Sundaes",
//           city: "163",
//           slugs: {
//             restaurant: "madno-house-of-sundaes-rangirkhari-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/23/2c312e6a-3d8a-4b71-8ab3-cec8063ab554_995598.jpg",
//           address:
//             "N.S. Avenue,Rangirkhari,Kanakpur,Pt-II,Cachar Sadar,Cachar,Assam-788005",
//           locality: "Rangirkhari",
//           areaName: "N.S. Avenue",
//           costForTwo: "50000",
//           costForTwoMessage: "₹500 FOR TWO",
//           cuisines: ["Ice Cream", "Desserts", "Beverages"],
//           avgRating: 4.6,
//           feeDetails: {},
//           avgRatingString: "4.6",
//           totalRatingsString: "6",
//           sla: {
//             deliveryTime: 47,
//             minDeliveryTime: 45,
//             maxDeliveryTime: 50,
//             lastMileTravel: 7.6,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "45-50 MINS",
//             lastMileTravelString: "7.6 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 11 am, today",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR NOW",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 11 am, today",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_5",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 11 am, today",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens today at 11:00 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "995598",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//             restaurant_id: "995598",
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "1000546",
//           name: "Roy'S Biryani Hub",
//           city: "163",
//           slugs: {
//             restaurant: "roy's-biryani-hub-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/a709db27-8a5e-4e22-b8df-4e8f8247b13e_1000546.jpg",
//           address:
//             "Azad Hind Road,Chenkoorie Road,By lane-4,House no-25 ,Uttar Krishnapur, Pt-I,Cachar Sadar,Cachar,Assam-788007",
//           locality: "Azad Hind Road",
//           areaName: "Tarapur",
//           costForTwo: "20000",
//           costForTwoMessage: "₹200 FOR TWO",
//           cuisines: [
//             "Chinese",
//             "Biryani",
//             "Desserts",
//             "Bengali",
//             "Indian",
//             "Bangladeshi",
//             "Snacks",
//             "Fast Food",
//           ],
//           avgRating: 4.6,
//           feeDetails: {},
//           avgRatingString: "4.6",
//           totalRatingsString: "73",
//           sla: {
//             deliveryTime: 60,
//             minDeliveryTime: 55,
//             maxDeliveryTime: 60,
//             lastMileTravel: 8.9,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "55-60 MINS",
//             lastMileTravelString: "8.9 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 11 am, today",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR NOW",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 11 am, today",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_5",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 11 am, today",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens today at 11:00 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "1000546",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             restaurant_id: "1000546",
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//           },
//         },
//       },
//     },
//   },
//   {
//     card: {
//       card: {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//         info: {
//           id: "336275",
//           name: "The London Shakes 1950",
//           city: "163",
//           slugs: {
//             restaurant: "the-london-shakes-tarapur-tarapur",
//             city: "silchar",
//           },
//           cloudinaryImageId: "rjichvzphvxf0nfmimud",
//           address:
//             "T-22, #rd Floor, Near Goldighi Mall Office, Goldighi Mall, Nazirpatty, Silchar, Assam - 788005",
//           locality: "Nazirpatty",
//           areaName: "Tarapur",
//           costForTwo: "25000",
//           costForTwoMessage: "₹250 FOR TWO",
//           cuisines: ["Beverages", "Desserts"],
//           avgRating: 3.8,
//           feeDetails: {},
//           avgRatingString: "3.8",
//           totalRatingsString: "225",
//           sla: {
//             deliveryTime: 55,
//             minDeliveryTime: 55,
//             maxDeliveryTime: 60,
//             lastMileTravel: 8.7,
//             serviceability: "SERVICEABLE_WITH_BANNER",
//             rainMode: "RAIN_MODE_NONE",
//             slaString: "55-60 MINS",
//             lastMileTravelString: "8.7 km",
//             iconType: "ICON_TYPE_EMPTY",
//           },
//           availability: {
//             nextOpenTimeMessage: "Opens next at 11:30 am, tomorrow",
//             restaurantClosedMeta: {
//               title: "CLOSED",
//               subtitle: "FOR TODAY",
//             },
//           },
//           aggregatedDiscountInfo: {
//             visible: true,
//           },
//           badges: {},
//           unorderableMessage: "Opens next at 11:30 am, tomorrow",
//           aggregatedDiscountInfoV2: {
//             visible: true,
//           },
//           ratingSlab: "RATING_SLAB_4",
//           availabilityServiceabilityMessage:
//             "Currently closed for delivery. Opens next at 11:30 am, tomorrow",
//           orderabilityCommunication: {
//             title: {
//               text: "CURRENTLY",
//             },
//             subTitle: {
//               text: "CLOSED",
//             },
//             message: {
//               text: "Opens tomorrow at 11:30 AM",
//               textColour: "primary",
//             },
//             customIcon: {
//               bgGradientColorStart: "#EB8322",
//               bgGradientColorEnd: "#EE5803",
//             },
//             commsStyling: {},
//           },
//           cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {},
//           },
//           externalRatings: {
//             aggregatedRating: {
//               rating: "--",
//             },
//           },
//           ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           featuredSectionInfo: {
//             sectionTitle: "More",
//           },
//         },
//         analytics: {
//           screenName: "explore",
//           context:
//             '{"tid":"ce2d94b1-e24e-c370-160c-d96b319acf3c","grid":"20487004-c80c-486c-9b74-79a0b6ed0f66","queryUniqueId":"481aae54-1595-4863-3b2a-a90c65d3d87d","query":"Desserts"}',
//           objectValue: "336275",
//           impressionObjectName: "impression-restaurant",
//           clickObjectName: "click-restaurant",
//         },
//         ctaWithParams: {
//           link: "swiggy://menu",
//           type: "DEEPLINK",
//           params: {
//             restaurant_id: "336275",
//             query: "Desserts",
//             sourceSessionId: "ikoc5deb-a0d9-492c-a766-7294eae38ace",
//             source: "SEARCH",
//             isSld: "false",
//             sourceRequestId: "4042426ed51af6e03e327d6614133446",
//           },
//         },
//       },
//     },
//   },
// ];

let restaurantList = [
  {
    info: {
      id: "238029",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/b329c933-6438-4262-9f5b-549008fbd621_238029.jpg",
      locality: "Mouza- Ukil Bazar",
      areaName: "Silchar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/dominos-pizza-mouza-ukil-bazar-silchar-rest238029",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "255435",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a625e5b3-16ef-432b-903c-dad17eef251b_255435.jpg",
      locality: "Premtola Road",
      areaName: "Goldighi Mall",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹300 OFF",
        subHeader: "ABOVE ₹1699",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/pizza-hut-premtola-road-goldighi-mall-rest255435",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481396",
      name: "Oh Yes Biryani",
      cloudinaryImageId: "t39rweqcxish8snx8omy",
      locality: "Premtala point",
      areaName: "Tarapur",
      costForTwo: "₹420 for two",
      cuisines: ["Biryani", "Momos", "Chinese", "Desserts"],
      avgRating: 4,
      parentId: "289163",
      avgRatingString: "4.0",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/oh-yes-biryani-premtala-point-tarapur-rest481396",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "379479",
      name: "BrotherHood Cafe & Restaurant",
      cloudinaryImageId: "u4rie4kbdzkyxubuyxfi",
      locality: "Ranghirkhari",
      areaName: "Kanakpur",
      costForTwo: "₹475 for two",
      cuisines: ["North Indian", "Chinese", "Biryani", "Tandoor", "Sandwich"],
      avgRating: 4.3,
      parentId: "50360",
      avgRatingString: "4.3",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      select: true,
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/brotherhood-cafe-and-restaurant-ranghirkhari-kanakpur-rest379479",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "631621",
      name: "Aroma Cafe & Restaurant",
      cloudinaryImageId: "gkcddpi48cjbwfqt22e4",
      locality: "Hailakandi Road",
      areaName: "Meherpur",
      costForTwo: "₹435 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor", "Beverages"],
      avgRating: 4.3,
      parentId: "36072",
      avgRatingString: "4.3",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/aroma-cafe-and-restaurant-hailakandi-road-meherpur-rest631621",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "282245",
      name: "Cafe Hub",
      cloudinaryImageId: "xvrmnhjbxmyaiv3g7wsj",
      locality: "Rangirkhari",
      areaName: "Rangirkhari",
      costForTwo: "₹290 for two",
      cuisines: [
        "North Indian",
        "Biryani",
        "Chinese",
        "Sandwich",
        "Burgers",
        "Rolls",
      ],
      avgRating: 4.2,
      parentId: "53297",
      avgRatingString: "4.2",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1900",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/cafe-hub-rangirkhari-rest282245",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "231890",
      name: "Rannaghar",
      cloudinaryImageId: "kwvoorn7b55fc8nh8o9z",
      locality: "Kanak Market",
      areaName: "Premtala",
      costForTwo: "₹345 for two",
      cuisines: ["Bengali", "Thalis", "North Indian"],
      avgRating: 4.3,
      parentId: "19869",
      avgRatingString: "4.3",
      totalRatingsString: "8.5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/rannaghar-kanak-market-premtala-rest231890",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "861534",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/954940c9-5533-41a0-a666-bfb32b0e7480_861534.jpg",
      locality: "Premtola Road",
      areaName: "Tarapur",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 4,
      parentId: "306806",
      avgRatingString: "4.0",
      totalRatingsString: "105",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹1599",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/pastas-by-pizza-hut-premtola-road-tarapur-rest861534",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "790780",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/aa1a35d0-8d5c-4223-bb13-0bb81808dfeb_790780.JPG",
      locality: "Ananta Plaza",
      areaName: "Rangirkhari",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/kfc-ananta-plaza-rangirkhari-rest790780",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "756298",
      name: "Borail View Regency",
      cloudinaryImageId: "28b05d8fa795696796887d2a2ad54167",
      locality: "Silchar",
      areaName: "Tarapur",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Chinese", "Indian"],
      avgRating: 4.3,
      parentId: "447329",
      avgRatingString: "4.3",
      totalRatingsString: "370",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/Bolt%20Listing%20badge@3x.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/borail-view-regency-tarapur-rest756298",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "231892",
      name: "Avighna Restaurants",
      cloudinaryImageId: "qvnhjguw28skwnsyuojr",
      locality: "Hailakandi Road",
      areaName: "Kanakpur",
      costForTwo: "₹245 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Momos", "Rolls"],
      avgRating: 3.7,
      parentId: "37978",
      avgRatingString: "3.7",
      totalRatingsString: "7.0K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-06 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-333c01ac-da74-4b38-8852-e7631d58659c",
    },
    cta: {
      link: "https://www.swiggy.com/city/silchar/avighna-restaurants-hailakandi-road-kanakpur-rest231892",
      type: "WEBLINK",
    },
  },
];

module.exports = { restaurantList };
