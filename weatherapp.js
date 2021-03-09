const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")

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
                            Temp: ${allWeather.app_temp} --- Time: ${allWeather.timestamp_local}
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


// WEATHER BY LAT/LONG


const successfulLookup = function(position){

    const {latitude,longitude} = position.coords;
    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=dff6a3d2b47f4c738ef66cad6c012603&hours=48&lat=${latitude}&lon=${longitude}&units=i`)
    .then(function(response){
        return response.json()
    })
    .then(function(result){
        let weatherResultByCoordinates = 
        `<li>
            <b> Current Location: ${result.name}</b>
            <p> Min Temp: ${result.main.temp_min}°F</p>
            <p> Max Temp: ${result.main.temp_max}°F</p>
            <p> Pressure: ${result.main.pressure} mbar</p>
        </li>
        `

        latLongUL.innerHTML = weatherResultByCoordinates
    })
}


console.log((navigator.geolocation.getCurrentPosition(successfulLookup,console.log)))
