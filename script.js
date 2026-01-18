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
const Foodtemplates=()=>{
    return(
        <div className="restroImg" style={{ display: 'inline-block',margin:'20px',padding:'10px' }}>
            <img src="https://imgs.search.brave.com/Tbpa832JNmU4Q2Yfau6MGO8wt44_0MnVCKaLbPXdPvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/MzIwLzA4OC9zbWFs/bC9iZWxnaXVtLXdh/ZmZsZS13aXRoLWlj/ZS1jcmVhbS1haS1n/ZW5lcmF0aXZlLXBo/b3RvLmpwZw"></img>
            <h3>Belgium waffle</h3>
            <h3>Near Shyam plaza</h3>
            <h3>4.5kms</h3>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Search Restaurant Name"></input>
                <button>Search</button>
            </div>
            <div className="foodTemplate">
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
                <Foodtemplates/>
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