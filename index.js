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
    console.log('get background image')
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
       /**
         * Challenge: Add the following data points underneath the 
         * name and icon (1 paragraph each):
         * 
         * 1. Current price (data.market_data.current_price.usd)
         * 2. 24-hour high price (data.market_data.high_24h.usd)
         * 3. 24-hour low price (data.market_data.low_24h.usd)
         * 
         * Feel free to check the response data object for your own currency
         * if you don't want to use USD.
         */
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
                <p>Current: ${cryptoItem.market_data.current_price.usd}</p>
                <p>Day High: ${cryptoItem.market_data.high_24h.usd}</p>
                <p>Day Low: ${cryptoItem.market_data.low_24h.usd}</p>
        </div>
        `
        //image.thumb
        //name
        
    });
    cryptoDiv.innerHTML = cryptoHTML

}

getBackgroundImage()
document.getElementById("get-crypto").addEventListener('click', getCryptoData)
//sgetBackgroundImage()

/*
<div id="crypto">
        <div class="crypto-line">
            <img class="crypto-thumbnail" src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400">
            <p>Bitcoin</p>
        </div>
        
        <div class="crypto-line">
            <img class="crypto-thumbnail" src="https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png?1696501409">
            <p>Dogecoin</p>
        </div>
        
        <div class="crypto-line">
            <img class="crypto-thumbnail" src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1696501628">
            <p>Ethereum</p>
        </div>
        
        <div class="crypto-line">
            <img class="crypto-thumbnail" src="https://assets.coingecko.com/coins/images/2/thumb/litecoin.png?1696501400">
            <p>Litecoin</p>
        </div>
        </div>
*/