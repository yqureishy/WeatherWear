const cityNameTextBox = document.getElementById("cityNameTextBox")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")

searchButton.addEventListener('click', function(){

    let city = cityNameTextBox.value

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d19d629f689bf144eebc7b0b3aee7004&units=imperial`)
    .then((response)=>{
        return (response.json())
    }).then((json)=>{

    for (let index = 0; index <=39; index++) {
        
        let feelsLike = ((json.list[index].main.feels_like))

        let displayTemp = ` 
                        <li>
        
                        Temp: ${feelsLike}

                        </li>`

        weatherUL.insertAdjacentHTML('beforeend', displayTemp)
    
    }
    })
    
})
