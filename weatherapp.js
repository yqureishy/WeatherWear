const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")
const latLongUL = document.getElementById("latLongUL")

searchButton.addEventListener('click', function(){

    let city = cityNameTextBox.value

    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=dff6a3d2b47f4c738ef66cad6c012603&hours=48&units=I`)
    .then((response)=>{
        return (response.json())
    }).then((result)=>{
            console.log(result.data)
                
            for (let index = 0; index <=47; index++) {
            
            let allWeather = ((result.data[index]))
            console.log(allWeather)
            console.log(allWeather.app_temp)


            let displayTemp = ` 
                            <li>
                            Temp: ${allWeather.app_temp} --- Time: ${allWeather.timestamp_local} ---Clothing Apparel: ${clothingApparel(allWeather.app_temp)}
                            <br>
                            <br>
                            </li>`

            weatherUL.insertAdjacentHTML('beforeend', displayTemp)
    
        }
    })

})
    
const successfulLookup = function(position){

    const {latitude,longitude} = position.coords;
    console.log(latitude)
    console.log(longitude)

    
})


function clothingApparel(temp) {
    if (temp > 80){
        return  "tank top"
    }
    else if (temp <= 80 && temp > 70 ){
        return  "t-shirt"
    }
    else if (temp <= 70 && temp > 60 ){
        return "full sleeves shirt"
    }
    else if (temp <= 60 && temp > 50 ){
        return "jacket"
    }
    else if (temp <= 50 && temp > 40 ){
        return "overcoat"
    }
    else if (temp <= 40 && temp > 30 ){
        return "overcoat"
    }
    else if (temp <= 30){
        return  "jacket + overcoat + gloves"
    }
}


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


console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))
