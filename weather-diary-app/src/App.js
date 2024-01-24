import './App.css';
import React, {useState} from 'react';
import Navbar from './components/navbar';
import DateTime from './components/dateTime';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Diary from './components/Diary';
import AddNote from './components/AddNote';
//import {handleProfileUpdate} from './components/redux/formRender'
import ColorChange from './components/ColorChange';
import WeatherAPI from './components/weatherAPI';
import StartWeather from './components/StartWeather';


function App() {
  
  const [ color , setColor ] = useState(['#EC5858', '#00ff00', '#0000ff', '#f0f000']);
  const [ gradColor, setGradColor] = useState();

  const transColor = (pColor) => {
    console.log("trans color: ", pColor);
    setColor(pColor);
  }

  const gradietColor = (dColor) => {
    setGradColor(dColor);
  }

  const smallGradietColor = (dColor) => {
    setSmallGradColor(dColor);
  }

  const [ gradSmallColor, setSmallGradColor] = useState();

  



//wetterdaten temp
  const [ currentTemp, setCurrentTemp] = useState();
  const temperatur = (dWeather) => {
    setCurrentTemp(dWeather);
  }

  //wetterdaten humidity
  const [ currenthumidity, setCurrenthumidity] = useState();
  const humidity = (dhumidity) => {
    setCurrenthumidity(dhumidity);
  }

   //wetterdaten location
  const [ currentlocation, setCurrentlocation] = useState();
  const location = (dlocation) => {
    setCurrentlocation(dlocation);
  }



 console.log("speichern lokale Temp",currentTemp);
  console.log("speichern lokale Feuchtigkeit",currenthumidity);
  console.log("speichern loacation",currentlocation);

  return (
    <>

    <Navbar />
    <DateTime/>
      <BrowserRouter>
      
        <div className="App">
          <Routes className="routes">
            <Route exact path="/diary" element={<Diary gradColor={gradColor}  />} />
            <Route exact path="/handleProfileUpdate" element={<AddNote gradColor={gradColor} gradSmallColor={gradSmallColor} currentlocation={currentlocation} currentTemp={currentTemp} currenthumidity={currenthumidity}  />} />
            <Route exact path="/ColorChange" element={<ColorChange transColor={transColor} colorDatas={color}  smallGradietColor={smallGradietColor} />} />
            <Route exact path="/" element={<WeatherAPI colorDatas={color} gradietColor={gradietColor} smallGradietColor={smallGradietColor}  temperatur={temperatur} humidity={humidity} location={location}/>} />
          </Routes>
        </div>
      
        <div className="fixed-bottom">
          <div className="nav_link_items">
            <NavLink to="/" className='nav_link' style={({ isActive }) => ({ 
              background: isActive ? 'rgb(219 207 218)' : 'white' })}>
              <img src="info.svg" className='nav_img' alt="info"></img>
              <span className='nav_name'>Circle</span>
            </NavLink>

            <NavLink to="/diary" className='nav_link' style={({ isActive }) => ({ 
              background: isActive ? 'rgb(219 207 218)' : 'white' })}>
              <img src="diary.svg" className='nav_img' alt="diary"></img>
              <span className='nav_name'>Diary</span>
            </NavLink>

            <NavLink to="/handleProfileUpdate" className='nav_link' style={({ isActive }) => ({ 
              background: isActive ? 'rgb(219 207 218)' : 'white' })}>
              <img src="addNote.svg" className='nav_img' alt="addNote"></img>
              <span className='nav_name'>Add</span>
            </NavLink>

            <NavLink to="/ColorChange" className='nav_link' style={({ isActive }) => ({ 
              background: isActive ? 'rgb(219 207 218)' : 'white' })}>
              <img src="colorChange.svg" className='nav_img' alt="ColorChange"></img>
              <span className='nav_name'>Color</span>
            </NavLink>
          </div>
        </div>
        
      </BrowserRouter>
     
    </>
  );
}

export default App;