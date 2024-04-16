function sgetBackgroundImage() {
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=80&w=1080)`
    })
}


async function getBackgroundImage() {
    let res
    let data
    try {
        res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=technology")
        data = await res.json()
        document.body.style.backgroundImage = `url(${data.links.download})`


    } catch {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=80&w=1080)`
    }
    const creditText = document.createElement("p")
    creditText.textContent = "Image By:" + data.user.name
    document.getElementById("author").appendChild(creditText)
    console.log('data', data)
}

async function getCryptoData() {
    console.log('getCryptoDate')
    const coins = [ 'bitcoin', 'dogecoin', 'ethereum', 'litecoin']
    try {
        const coinData = await Promise.all(coins.map(coin => {
            const data = getCoinData(coin)
            return data
            
        }));
        console.log('Coins Data:', coinData)
        renderCryptoData(coinData)

    } catch (err) {
        console.error(err)
    }

}

async function getCoinData(coin) {
    try {
        const res = await fetch(`
        https://api.coingecko.com/api/v3/coins/${coin}`, 
        {
            method:"GET",
            headers: {
                accept: 'application/json'
            }
        })
        console.log('res: ', res)
        if(!res.ok) {
            throw Error("Error getting coin data from API")
        }
        const data = await res.json()
        console.log('Single Coin data: ', data)
        return data

    } catch (err) {
        throw err

    }

}

async function sgetCryptoData() {
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        renderCryptoData([data])
    })
    .catch(err => console.error(err))
}

function renderCryptoData(dataArray) {
    const cryptoDiv = document.getElementById("crypto")
    let cryptoHTML = ""
    dataArray.forEach(cryptoItem => {
        cryptoHTML += `
        <div class='crypto-item'>
            <div class='crypto-header'>
                <img class="crypto-thumbnail" src=${cryptoItem.image.thumb}>
                <p>${cryptoItem.name}</p>
            </div>
            <div class="crypto-price">
                <p>Current: $${cryptoItem.market_data.current_price.usd}</p>
                <p>Day High: $${cryptoItem.market_data.high_24h.usd}</p>
                <p>Day Low: $${cryptoItem.market_data.low_24h.usd}</p>
        </div>
        `
        //image.thumb
        //name
        
    });
    cryptoDiv.innerHTML = cryptoHTML

}




document.getElementById("get-crypto").addEventListener('click', getCryptoData)
//sgetBackgroundImage()

function getFormattedTime() {
    const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return now
}

function updateTime() {
    const time = getFormattedTime()
    const timeDiv = document.getElementById("time")
    timeDiv.textContent = time;
}

setInterval(updateTime, 1000)


function locateCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                resolve(position);
            },
            (error) => {
                console.log(error.message);
                reject(error);
            }
        );
    });
}


async function getWeather() {
    const pos = await locateCurrentPosition()
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    console.log('[lat, lon]', [lat, lon])
    
    const res = 
        await fetch(`
            https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
    const weather = await res.json()
    const wIconId = weather.weather[0].icon
    const iconURL = `https://openweathermap.org/img/wn/${wIconId}.png`
    const weatherDiv = document.getElementById("weather")
    const cTemp = weather.main.temp
    const cLoc = weather.name
    weatherDiv.innerHTML= `
        <div class="weather-top">
            <img src="${iconURL}">
            <p class="temp">${cTemp}°</p>
        </div>
        <p class="location">${cLoc}</p>
    `

    console.log('weather:', weather)
}

/**
 * Challenge: Try to lay out the weather similar to how
 * Momentum does it.
 */
function setupPage() {
    getBackgroundImage()
    updateTime()
    getWeather()
}

setupPage()