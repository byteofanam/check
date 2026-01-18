import React from "react";
import ReactDOM from "react-dom/client";
// header
// -logo
// -navitems
// body
// -searchbar
// -foodtemplates
// footer
const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://imgs.search.brave.com/uPppIVHs6AZCQNVVkNjA5vk4NMZgN0tgclRvmFLucg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC83/Ni84NS9yZXRyby13/b21hbi1jaGVmLWxv/Z28tdmVjdG9yLTIy/MzE3Njg1LmpwZw"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}
//destructuring on the fly
const Foodtemplates=(props)=>{
    const {resData}=props;
    return(
        <div className="restroImg" style={{ display: 'inline-block',margin:'20px',padding:'10px' }}>
            <img src="https://imgs.search.brave.com/Tbpa832JNmU4Q2Yfau6MGO8wt44_0MnVCKaLbPXdPvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/MzIwLzA4OC9zbWFs/bC9iZWxnaXVtLXdh/ZmZsZS13aXRoLWlj/ZS1jcmVhbS1haS1n/ZW5lcmF0aXZlLXBo/b3RvLmpwZw"></img>
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines}</h3>
            <h3>{resData.info.locality}</h3>
            <h3>4.5kms</h3>
        </div>
    )
}
const resObj={
info: {
id: "385824",
name: "The Belgian Waffle Co.",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
locality: "Sinchai Colony",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
avgRating: 4.6,
veg: true,
parentId: "2233",
avgRatingString: "4.6",
totalRatingsString: "351",
sla: {
deliveryTime: 60,
lastMileTravel: 13.4,
serviceability: "SERVICEABLE",
slaString: "55-65 mins",
lastMileTravelString: "13.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-01-18 22:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-172ec494-5426-4bb1-a313-3ad541926162"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
type: "WEBLINK"
},
};
const Body=()=>{
    return(
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search Restaurant Name"></input>
                <button>Search</button>
            </div>
            <div className="foodTemplate">
                <Foodtemplates resData={resObj}/>
                {/* <Foodtemplates /> */}
                {/* <Foodtemplates resName="indian taste" cuisine="biryani" location="Near City Center"/>
                <Foodtemplates resName="pizza" cuisine="cheese" location="Near Mall"/>
                <Foodtemplates resName="burger" cuisine="beef" location="Near Park"/>
                <Foodtemplates resName="sushi" cuisine="fish" location="Near Beach"/>
                <Foodtemplates resName="pasta" cuisine="tomato sauce" location="Near Mall"/>
                <Foodtemplates resName="salad" cuisine="greens" location="Near Park"/>
                <Foodtemplates resName="ice cream" cuisine="vanilla" location="Near Beach"/> */}
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);