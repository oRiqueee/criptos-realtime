const urlBTC = "https://www.mercadobitcoin.net/api/BTC/ticker/";
const urlETH = "https://www.mercadobitcoin.net/api/ETH/ticker";
const urlLTC = "https://www.mercadobitcoin.net/api/LTC/ticker";

setInterval(() => {

//Bitcoin
fetch(urlBTC)
  .then(response => response.json())
  .then(data =>{ 

    var id = document.getElementById('bitcoin');
    var result = (data.ticker.last);
    var tratado = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result));

   id.innerText = (tratado);
  });

//Ethereum
fetch(urlETH)
    .then(response => response.json())
    .then(data =>{ 
  
      var id = document.getElementById('ethereum');
      var result = (data.ticker.last);
      var tratado = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result));
  
     id.innerText = (tratado);
    });

//Litecoin
    fetch(urlLTC)
    .then(response => response.json())
    .then(data =>{ 
  
      var id = document.getElementById('litecoin');
      var result = (data.ticker.last);
      var tratado = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result));
  
     id.innerText = (tratado);
    });
  }, 1000);

