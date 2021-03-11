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
                            Feels Like: ${parseInt(allWeather.app_temp)}<span>&#176;</span>F</div><br>
                            <div><img id="clothesDisplay"> ${clothingApparel(allWeather.app_temp)}</img></div>
                            <br>
                            <br>
                            </div>`

            // todaysWeatherUL.insertAdjacentHTML('beforeend', displayTemp) 

            dateTodayHeader.innerHTML = `<h4> Today's Forecast </h4><p style="font-size: 15px">${new Date(Date.parse(result.data[0].timestamp_local)).toDateString().split(' ').slice(0,3).join(' ')}</p>`

            dateTomorrowHeader.innerHTML = `<h4> Tomorrow's Forecast </h4><p style="font-size: 15px">${new Date(Date.parse(result.data[24].timestamp_local)).toDateString().split(' ').slice(0,3).join(' ')}</p>`

            let apiTime = new Date(Date.parse(result.data[index].timestamp_local)).toLocaleDateString()
            console.log("The time from the api is " + apiTime) 

            let today = new Date();
            let todaysDate = today.getMonth()+1 +'/'+ today.getDate() +'/'+ today.getFullYear()
            console.log("Today's date " + todaysDate)

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            let tomorrowsDate = tomorrow.getMonth()+1 +'/'+ tomorrow.getDate() +'/'+ tomorrow.getFullYear()
            console.log("Tomorrow's date " + tomorrowsDate)

            if (apiTime === todaysDate) {
                console.log("Today's Forecast")
                todaysWeatherUL.insertAdjacentHTML('beforeend', displayTemp)
            }
            else if (apiTime === tomorrowsDate) {
                console.log("Tomorrow's Forecast")
                tomorrowsWeatherUL.insertAdjacentHTML('beforeend', displayTemp)
            }
            else {
                console.log("Weather for the day after tomorrow")
            }
        }
            
        })
})
    

function clothingApparel(temp) {
    if (temp > 80){
        tank = "<img src='clothes/008-tank-top.png'width=42 height=42 ></img>";
        shorts ="<img src= 'clothes/011-shorts.png'width= 42 height= 42></img>";
        flipFlops = "<img src='clothes/010-flip-flops.png'width=42 height=42 ></img>";
        return `${tank} + ${shorts} + ${flipFlops}` 
    }
    else if (temp <= 80 && temp > 69.9 ){
        tshirt = "<img src='clothes/007-tshirt.png'width= 42 height= 42></img>";
        shorts ="<img src= 'clothes/011-shorts.png'width= 42 height= 42></img>";
        flipFlops = "<img src='clothes/010-flip-flops.png'width=42 height=42 ></img>";

        return `${tshirt} + ${shorts} + ${flipFlops}`
    }
    else if (temp <= 70 && temp > 59.9 ){
        longSleeveShirt ="<img src= 'clothes/006-longsleeve.png'width=42 height= 42></img>";
        tshirt = "<img src='clothes/007-tshirt.png'width= 42 height= 42></img>";
        pants = "<img src='clothes/013-trousers.png'width=42 height=42 ></img>";
        sneakers = "<img src='clothes/016-sneakers.png'width=42 height=42 ></img>";
        return `${tshirt} + ${longSleeveShirt} + ${pants} + ${sneakers}`
    }
    else if (temp <= 60 && temp > 49.9 ){
        longSleeveShirt="<img src= 'clothes/006-longsleeve.png' width= 42 height= 42></img>";
        hoody="<img src= 'clothes/005-hoodie.png' width= 42 height= 42></img>";
        pants = "<img src='clothes/013-trousers.png'width=42 height=42 ></img>";
        sneakers = "<img src='clothes/016-sneakers.png'width=42 height=42 ></img>";
        return `${longSleeveShirt} + ${hoody} + ${pants} + ${sneakers}`
    }
    else if (temp <= 50 && temp > 39.9 ){
        longSleeveShirt="<img src= 'clothes/006-longsleeve.png' width= 42 height= 42></img>";
        hoody="<img src= 'clothes/005-hoodie.png'width= 42 height= 42></img>";
        jacket="<img src= 'clothes/004-jacket-1.png'width= 42 height= 42></img>";
        pants = "<img src='clothes/013-trousers.png'width=42 height=42 ></img>";
        boots = "<img src='clothes/012-boots.png'width=42 height=42 ></img>";
        return `${longSleeveShirt} + ${hoody} + ${jacket} + ${pants} + ${boots}`
    }
    else if (temp <= 40 && temp > 29.9 ){
        coat = "<img src='clothes/003-coat.png'width= 42 height= 42></img>";
        jacket = "<img src= 'clothes/004-jacket-1.png'width=42 height= 42></img>";
        pants = "<img src='clothes/013-trousers.png'width=42 height=42 ></img>";
        boots = "<img src='clothes/012-boots.png'width=42 height=42 ></img>";

        return `${jacket} + ${coat} + ${pants} + ${boots}`
    }

    else if (temp <= 29.9){
        coat = "<img src= 'clothes/003-coat.png'width= 42 height= 42 </img>";
        hat = "<img src= 'clothes/001-winter-hat.png'width= 42 height= 42</img> ";
        scarf = "<img src= 'clothes/002-scarf.png'width= 42 height= 42</img>";
        mittins = "<img src= 'clothes/009-gloves.png 'width= 42 height= 42</img>";
        pants = "<img src='clothes/013-trousers.png'width=42 height=42 ></img>";
        boots = "<img src='clothes/012-boots.png'width=42 height=42 ></img>";
        return ` ${coat} + ${hat} + ${scarf}<br><br>
               ${mittins} + ${pants} + ${boots}`
    }}




 // }}





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
