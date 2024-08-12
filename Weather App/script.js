
        let img = document.getElementById("img");
        let city = document.getElementById("city");
        let country = document.getElementById("country");
        let temperature = document.getElementById("temperature");
        let description = document.getElementById("description");
        let city_input = document.getElementById("city-input");
        let button = document.getElementById("button");
        let error_message = document.getElementById("error-message");
        let Apikey = "88ff00ba40f1f8b8acd71d5f7ee271ca";
        let urlimg = "";
        let body = document.querySelector("body");
        let weather = document.getElementById("weather")
        let currentLocationButton = document.getElementById("currentLocationButton");
        let weather_info = document.getElementById("weather-info")

        function showdata(){
            event.preventDefault();   

            if (city_input.value.trim() === "") {
                error_message.innerText = "Input field is empty";
            } else {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_input.value}&appid=${Apikey}&units=metric`;
        
        fetch(url)
               
        .then((res)=>{
           return res.json()
        })
     
         .then((data) => {
         
                   console.log(data)          
             if (data.cod === 200) {
                 error_message.innerText = "";
                const{id}=data.weather[0];
                 if(id >= 200 && id <= 232){
                     urlimg = "./assest/img/scattered-thunderstorms (1).png"
                     body.className = "thunderstorms"
                    
                 }
                 else if(id>= 300 && id <= 321){
                      urlimg = "./assest/img/drizzle.png"
                         body.className = "drizzle"
                 }
                 else if(id>= 500 && id <= 531){
                     urlimg = "./assest/img/storm.png"
                      body.className = "storm"
                }
                else if(id>= 600 && id <= 622){
                 urlimg = "./assest/img/snowy.png"
                  body.className = "snowy"
            }
            else if(id>= 701 && id <= 781){
             urlimg = "./assest/img/wind.png"
              body.className = "wind"
        }
        else if(id>= 801 && id <= 804){
         urlimg = "./assest/img/clouds.png"
          body.className = "clouds"
    }
    else{
     urlimg = "./assest/img/clear-sky.png"
      body.className = "clear-sky"
    }
             
                 img.src = `${urlimg}`;
                 city.innerText = data.name;
                 country.innerText = data.sys.country;
                 temperature.innerText = `${Math.floor(data.main.temp)}°C`;
                 description.innerText = data.weather[0].main;
                 city_input.value = "";
             } else {
                
                 weather_info.innerHTML = `<img src="./assest/not-found.png">`
             }
             
         })
         .catch((error) => {
             error_message.innerText = "Error fetching the weather data";
             console.error(error);
            });
            }}

city_input.addEventListener("keyup",(e)=>{
     if(e.key === "Enter"){
        showdata(e)
     }})



function currentLocation(event){
    event.preventDefault();
navigator.geolocation.getCurrentPosition((position)=>{
    
     let lon = position.coords.longitude;
     let lat = position.coords.latitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Apikey}`
   
    fetch(url)
   

    .then((res)=>{
       return res.json();
    })
   
    .then((data) => {  
       
   
  if (data.cod === 200) {
      error_message.innerText = "";
     const{id}=data.weather[0];
      if(id >= 200 && id <= 232){
          urlimg = "./assest/img/scattered-thunderstorms (1).png"
          body.className = "thunderstorms"
         
      }
      else if(id>= 300 && id <= 321){
           urlimg = "./assest/img/drizzle.png"
              body.className = "drizzle"
      }
      else if(id>= 500 && id <= 531){
          urlimg = "./assest/img/storm.png"
           body.className = "storm"
     }
     else if(id>= 600 && id <= 622){
      urlimg = "./assest/img/snowy.png"
       body.className = "snowy"
 }
 else if(id>= 701 && id <= 781){
  urlimg = "./assest/img/wind.png"
   body.className = "wind"
}
else if(id>= 801 && id <= 804){
urlimg = "./assest/img/clouds.png"
body.className = "clouds"
}
else{
urlimg = "./assest/img/clear-sky.png"
body.className = "clear-sky"
}
  
      img.src = `${urlimg}`;
      city.innerText = data.name;
      country.innerText = data.sys.country;
      temperature.innerText = `${Math.floor(data.main.temp)}°C`;
      description.innerText = data.weather[0].main;
      city_input.value = "";
  } else {
      img.src = "./assest/not-found.png";
      weather_info.innerHTML = `<img src="./assest/not-found.png">`
  }
})
.catch((error) => {
  error_message.innerText = error.message;
  console.error(error);
});
   
})
}


currentLocationButton.addEventListener("click",currentLocation)