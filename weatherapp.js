const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")
// const latLongUL = document.getElementById("latLongUL")
const stateNameTextBox = document.getElementById("stateNameTextBox")
const dateToday = document.getElementById("dateToday")

searchButton.addEventListener('click', function(){

    weatherUL.innerHTML = ""

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
            // console.log(allWeather.app_temp)


            let displayTemp = ` 
                            <div class="weatherInfo">

                            <div>Time: ${new Date(Date.parse(allWeather.timestamp_local)).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} |
                            Feels Like Temp: ${allWeather.app_temp}<span>&#176;</span></div>
                            <div><img id="clothesDisplay"> ${clothingApparel(allWeather.app_temp)}</img></div>
                            <br>
                            <br>
                            </div>`

            weatherUL.insertAdjacentHTML('beforeend', displayTemp) 
            
        }
        dateToday.insertAdjacentHTML('beforeend', `<p style="font-size: 15px">${new Date(Date.parse(result.data[0].timestamp_local)).toDateString("MMM dd")}</p>`)
    })

})

function clothingApparel(temp) {
    if (temp > 80){
        tank = "<img src='https://www.flaticon.com/svg/vstatic/svg/4037/4037249.svg?token=exp=1615339441~hmac=eb95846b3bc73be5a954f529a42a3492' width= 64 height= 64></img>";
        return tank
    }
    else if (temp <= 80 && temp > 70 ){
        tshirt = "<img src='https://www.flaticon.com/svg/vstatic/svg/1867/1867631.svg?token=exp=1615327084~hmac=34a8f6a8d6e0ebf4fe00a9140366195c'width= 64 height= 64></img>";
        return tshirt
    }
    else if (temp <= 70 && temp > 60 ){
        longSleeveShirt = "<img src='https://www.flaticon.com/svg/vstatic/svg/1720/1720824.svg?token=exp=1615327047~hmac=08e74c6dec43ffb468c49df73bc14d67'width= 64 height= 64></img>";
        tshirt = "<img src='https://www.flaticon.com/svg/vstatic/svg/1867/1867631.svg?token=exp=1615327084~hmac=34a8f6a8d6e0ebf4fe00a9140366195c'width= 64 height= 64></img>";
        return tshirt + longSleeveShirt
    }
    else if (temp <= 60 && temp > 50 ){
        longSleeveShirt="<img src= 'https://www.flaticon.com/svg/vstatic/svg/1720/1720824.svg?token=exp=1615338896~hmac=ba747354533d5d385a5db4e1ac16c21b' width= 64 height= 64></img>";
        hoody="<img src= 'https://www.flaticon.com/svg/vstatic/svg/120/120049.svg?token=exp=1615327014~hmac=3c23e15149bd2b6a93c14783b026073d'wid th= 64 height= 64></img>";
        return longSleeveShirt + hoody
    }
    else if (temp <= 50 && temp > 40 ){
        longSleeveShirt="<img src= 'https://www.flaticon.com/svg/vstatic/svg/1720/1720824.svg?token=exp=1615338896~hmac=ba747354533d5d385a5db4e1ac16c21b' width= 64 height= 64></img>";
        hoody="<img src= 'https://www.flaticon.com/svg/vstatic/svg/120/120049.svg?token=exp=1615327014~hmac=3c23e15149bd2b6a93c14783b026073d'wid th= 64 height= 64></img>";
        jacket="<img src= 'https://www.flaticon.com/svg/vstatic/svg/3126/3126039.svg?token=exp=1615337570~hmac=73c1d8f2a074013541fb4a8c501b971d'width= 64 height= 64></img>";
        return longSleeveShirt + hoody + jacket
    }
    else if (temp <= 40 && temp > 30 ){
        coat = "<img src='https://www.flaticon.com/svg/vstatic/svg/3672/3672094.svg?token=exp=1615326612~hmac=bb3d400de5f7f316916adc27fdfe67af'width= 64 height= 64></img>";
        jacket = "<img src= 'https://www.flaticon.com/svg/vstatic/svg/3126/3126039.svg?token=exp=1615337570~hmac=73c1d8f2a074013541fb4a8c501b971d'width= 64 height= 64></img>";

        return jacket + coat
    }
    else if (temp <= 30){
        coat = "<img src= 'https://www.flaticon.com/svg/vstatic/svg/3672/3672094.svg?token=exp=1615326612~hmac=bb3d400de5f7f316916adc27fdfe67af'width= 64 height= 64></img>";
        hat = "<img src= 'https://www.flaticon.com/svg/vstatic/svg/615/615844.svg?token=exp=1615336532~hmac=33da81dc8f607dffc0b6d3ed576b75f8'width= 64 height= 64></img> ";
        scarf = "<img src= 'https://www.flaticon.com/svg/vstatic/svg/1387/1387006.svg?token=exp=1615337246~hmac=0673521781f0cacd29e08c41cd5fbd49'width= 64 height= 64></img>";
        return coat + hat + scarf
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
