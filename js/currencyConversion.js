var inputValue = document.getElementById("input");
var btn = document.getElementById("translate");
var outputBox = document.getElementById("output");
var fromCurrency = document.getElementById("fromCurrency");
var toCurrency = document.getElementById("toCurrency");

var inputCurrency = fromCurrency.value;
var outputCurrency = (toCurrency.value);
var url = "https://api.exchangeratesapi.io/latest?base="+inputCurrency;
console.log(url);

fromCurrency.addEventListener("change",function(){
    inputCurrency = fromCurrency.value;
    console.log(inputCurrency);
    url = "https://api.exchangeratesapi.io/latest?base="+inputCurrency;
    console.log(url);
})
toCurrency.addEventListener("change", function(){
    outputCurrency = (toCurrency.value);
    console.log(typeof(outputCurrency));
})

btn.addEventListener("click",convertor);

function errorHnadler(error){
    alert(error);
}

function convertor(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
            outputBox.innerText = data.rates[outputCurrency]*inputValue.value;
        })
    .catch(errorHnadler);
}