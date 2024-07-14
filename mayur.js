const inputbox =document.querySelector(".input-box");
const weatherimg=document.querySelector('.w-img');
const tempreture=document.querySelector('.temp');
const discription=document.querySelector('.discription');
const humidity =document.querySelector('#humidity');
const windspeed=document.querySelector('#wind-speed');
const searchbtn=document.querySelector('.searchbtn');
 const location1=document.querySelector(".loc")
 const weather_body=document.querySelector(".weather-body")
 
 async function checkweather(city){
   const api_key="03e83f0c393715ffcb6257a7e6225abd";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`)
    .then(response=>response.json());

    if(weather_data.cod==='404'){
      location1.style.display="flex";
      weather_body.style.display="none"
      console.log("error");
      return;
    }
    weather_body.style.display="flex"
    location1.style.display="none";
    tempreture.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    discription.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed} Km/H`;

    
    switch(weather_data.weather[0].main){
        case 'Clouds':
          weatherimg.src="https://raw.githubusercontent.com/CodeTraversal/JavaScript-Projects/a45b12bc716fea3b53c458d2b712e73ef1f5dcfa/Weather%20App/assets/cloud.png";
        break;
        case 'Clear':
          weatherimg.src="https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/clear.png?raw=true";
        break;
        case 'Rain':
          weatherimg.src="https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/rain.png?raw=true";
        break;
        case 'Mist':
          weatherimg.src="https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/mist.png?raw=true";
        break;
        case 'Snow':
          weatherimg.src="https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/snow.png?raw=true";
        break;
  }
}

searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
})