// Openweathermap API. Do not share it publicly.
const api = 'e18398d0cb985413d3454d887158429c'; //Replace with your API

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');

const Feeling = document.querySelector(' .ff');
const Humidity = document.querySelector(' .h');

const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');


window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
 // if (navigator.geolocation) {
   // navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      //long = position.coords.longitude;
      //lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${53.07}&lon=${08.80}&appid=${api}&units=metric`;

      // Using fetch to get data
    fetch(base)

        .then((response) => {
          return response.json();
        }

      )
        .then((data) => {
            const { temp, feels_like, humidity } = data.main;
          
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
            loc.textContent = `${place}`;

            desc.textContent = `${description}`;
            Feeling.textContent = ` feels like: ${feels_like} °C`;

            tempC.textContent = `${temp.toFixed(2)} °C`;
            tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
            humidity.textContent = `${humidity} %`;

          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
}

    const elem = document.getElementById('try');

// change text color to blue
elem.style.color = 'try';
elem.style.backgroundColor = 'blue';

    );
  //}
//});
