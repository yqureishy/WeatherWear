const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")
const latLongUL = document.getElementById("latLongUL")

searchButton.addEventListener('click', function(){

    let city = cityNameTextBox.value
    cityNameTextBox.value = ""

    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=dff6a3d2b47f4c738ef66cad6c012603&hours=48&units=I`)
    .then((response)=>{
        return (response.json())
    }).then((result)=>{
            console.log(result.data)
                
            for (let index = 0; index <=47; index++) {
            
            let allWeather = ((result.data[index]))
            console.log(allWeather)
            // console.log(allWeather.app_temp)


            let displayTemp = ` 
                            <div class="weatherInfo">
                            <div>Time: ${new Date(Date.parse(allWeather.timestamp_local)).toLocaleString()} |
                            Feels Like Temp: ${allWeather.app_temp}<span>&#176;</span></div>
                            <div class="clothesDisplay"> ${clothingApparel(allWeather.app_temp)}</div>
                            <br>
                            <br>
                            </div>`

            weatherUL.insertAdjacentHTML('beforeend', displayTemp)
    
        }
    })

})
    
const successfulLookup = function(position){

    const {latitude,longitude} = position.coords;
    console.log(latitude)
    console.log(longitude)

    
}


function clothingApparel(temp) {
    if (temp > 80){
        image = "<img src='/Users/wesleykolar/frontendproject/FrontendProject/clothes/tank-top.png'></img>";
        return image
    }
    else if (temp <= 80 && temp > 70 ){
        image = "<img src='/Users/wesleykolar/frontendproject/FrontendProject/clothes/tshirt.png'></img>";
        return image
    }
    else if (temp <= 70 && temp > 60 ){
        image = "<img src='/Users/wesleykolar/frontendproject/FrontendProject/clothes/long-sleeve.png'></img>";
        return image
    }
    else if (temp <= 60 && temp > 50 ){
        image= "<img src= '/Users/wesleykolar/frontendproject/FrontendProject/clothes/hoodie.png'></img>";
        return image
    }
    else if (temp <= 50 && temp > 40 ){
        image= "<img src= '/Users/wesleykolar/frontendproject/FrontendProject/clothes/jacket.png'></img>";
        return image
    }
    else if (temp <= 40 && temp > 30 ){
        image = "<img src='/Users/wesleykolar/frontendproject/FrontendProject/clothes/coat.png'></img>";
        return image
    }
    else if (temp <= 30){
        image ="<img src= '/Users/wesleykolar/frontendproject/FrontendProject/clothes/coat.png'></img>";
        return image
    }}


// WEATHER BY LAT/LONG



// const successfulLookup = function(position){

//     const {latitude,longitude} = position.coords;
//     fetch(`https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=dff6a3d2b47f4c738ef66cad6c012603`)
//     .then(function(response){
//         console.log(response)
//         return response.json()
//     })
//     .then(function(result){

//             let displayTemp = ` 
//                             <li>
//                             Temp: ${result.data[0].app_temp} --- Time: ${result.data[0].timestamp_local}
//                             <br>
//                             <br>
//                             </li>`

//         latLongUL.innerHTML = displayTemp

//     })
// }


// // console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))


// console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))
