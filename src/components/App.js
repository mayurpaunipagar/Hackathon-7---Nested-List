import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");
  const toggleCities = (event) => {
    setStateId(event.target.id);
    console.log(event.target.id);
    
  }
  const toggleTowns = (event) => {
    setCityId(event.target.id);
  }
  return (<div id="main">
    <ol>
      {states.map((mystate, index) => (
        <li id={"state" + (index + 1)} onClick={toggleCities} style={{ cursor: 'pointer' }}>
          {mystate.name}
          <ol>
            {mystate.cities.map((mycity, indexCity) => (
              (stateId===("state"+(index+1)))?(<li id={"city" + (indexCity + 1)} onClick={toggleTowns} style={{ cursor: 'pointer' }}>
                {mycity.name}
                <ol>
                  {mycity.towns.map((mytown,indexTown)=>(
                    (cityId===("city"+(indexCity+1)))?(<li id={"town" + (indexTown + 1)}>{mytown.name}</li>):("")
                  ))}
                </ol>
              </li>):("")
            ))}
          </ol>
        </li>
      ))}
    </ol>

  </div>);
}

export default App;
