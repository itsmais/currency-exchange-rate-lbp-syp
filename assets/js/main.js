function displayExchangeRates() { 
    var requestURL = 'https://api.exchangerate.host/latest?base=usd';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var response = request.response;
    console.log(response["rates"]["LBP"]);
    document.getElementById("exchange-result").innerHTML += " " + Math.floor(response["rates"]["LBP"]*10)/10 + " LBP" + " = " + Math.floor(response["rates"]["SYP"]*10)/10 + " SYP";
    console.log(response);
    }
  
} 