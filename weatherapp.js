const cityNameTextBox = document.getElementById("cityNameTextBox");
const searchButton = document.getElementById("searchButton");
const todaysWeatherUL = document.getElementById("todaysWeatherUL");
const tomorrowsWeatherUL = document.getElementById("tomorrowsWeatherUL");
// const latLongUL = document.getElementById("latLongUL")
const stateNameTextBox = document.getElementById("stateNameTextBox")
const dateTodayHeader = document.getElementById("dateTodayHeader")
const dateTomorrowHeader = document.getElementById("dateTomorrowHeader")



searchButton.addEventListener('click', function(){

    todaysWeatherUL.innerHTML = ""
    tomorrowsWeatherUL.innerHTML = ""

    let city = cityNameTextBox.value
    let state = stateNameTextBox.value
    cityNameTextBox.value = ""
    stateNameTextBox.value = ""

    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city},${state}&key=dff6a3d2b47f4c738ef66cad6c012603&hours=48&units=I`)
    .then((response)=>{
        return (response.json())
    }).then((result)=>{
            console.log(result.data)
                
            for (let index = 0; index <=47; index++) {
            
            let allWeather = ((result.data[index]))
            console.log(allWeather)

            let displayTemp = ` 
                            <div class="weatherInfo">

                            <div>${new Date(Date.parse(allWeather.timestamp_local)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} |
                            Feels Like: ${parseInt(allWeather.app_temp)}<span>&#176;</span>F</div>
                            <div><img id="clothesDisplay"> ${clothingApparel(allWeather.app_temp)}</img></div>
                            <br>
                            <br>
                            </div>`

            // todaysWeatherUL.insertAdjacentHTML('beforeend', displayTemp) 

            dateTodayHeader.innerHTML = `<h4> Today's Forecast </h4><p style="font-size: 15px">${new Date(Date.parse(result.data[0].timestamp_local)).toDateString().split(' ').slice(0,3).join(' ')}</p>`

            dateTomorrowHeader.innerHTML = `<h4> Tomorrow's Forecast </h4><p style="font-size: 15px">${new Date(Date.parse(result.data[24].timestamp_local)).toDateString().split(' ').slice(0,3).join(' ')}</p>`

            let apiTime = new Date(Date.parse(result.data[index].timestamp_local)).toLocaleDateString()
            // let apiTime = allWeather.timestamp_local
            console.log(apiTime) //api object

            let today = new Date();
            let date = today.getMonth()+1 +'/'+ today.getDate() +'/'+ today.getFullYear()
            console.log(date) //object I created

            if (date === apiTime) {
                console.log("Today's Forecast")
                todaysWeatherUL.insertAdjacentHTML('beforeend', displayTemp)
            }
            else {
                console.log("Tomorrow's Forecast")
                tomorrowsWeatherUL.insertAdjacentHTML('beforeend', displayTemp)
            }
        }
            
        })
})
    

function clothingApparel(temp) {
    if (temp > 80){
        tank = "<img src='clothes/008-tank-top.png'></img>";
        return tank
    }
    else if (temp <= 80 && temp > 69.9 ){
        tshirt = "<img src='clothes/007-tshirt.png'width= 64 height= 64></img>";
        return tshirt
    }
    else if (temp <= 70 && temp > 59.9 ){
        longSleeveShirt ="<img src= 'clothes/006-longsleeve.png'width= 64 height= 64></img>";
        tshirt = "<img src='clothes/007-tshirt.png'width= 64 height= 64></img>";
        return `${tshirt} + ${longSleeveShirt}`
    }
    else if (temp <= 60 && temp > 49.9 ){
        longSleeveShirt="<img src= 'clothes/006-longsleeve.png' width= 64 height= 64></img>";
        hoody="<img src= 'clothes/005-hoodie.png' width= 64 height= 64></img>";
        return `${longSleeveShirt} + ${hoody}`
    }
    else if (temp <= 50 && temp > 39.9 ){
        longSleeveShirt="<img src= 'clothes/006-longsleeve.png' width= 64 height= 64></img>";
        hoody="<img src= 'clothes/005-hoodie.png'width= 64 height= 64></img>";
        jacket="<img src= 'clothes/004-jacket-1.png'width= 64 height= 64></img>";
        return `${longSleeveShirt} + ${hoody} + ${jacket}`
    }
    else if (temp <= 40 && temp > 29.9 ){
        coat = "<img src='clothes/003-coat.png'width= 64 height= 64></img>";
        jacket = "<img src= 'clothes/004-jacket-1.png'width= 64 height= 64></img>";

        return `${jacket} + ${coat}`
    }

    else if (temp <= 30){
        coat = "<img src= 'clothes/003-coat.png'</img>";
        hat = "<img src= 'clothes/001-winter-hat.png'</img> ";
        scarf = "<img src= 'clothes/002-scarf.png'</img>";
        mittins = "<img src= 'clothes/009-gloves.png '</img>";

        return `${coat} + ${hat} + ${scarf} +  ${mittins}`
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
