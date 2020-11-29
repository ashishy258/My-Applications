var inputValue = document.getElementById("input");
var btn = document.getElementById("translate");
var outputBox = document.getElementById("output");
var selectLang = document.getElementById("fromEnglish");

var lang = selectLang.value;
var url = "https://api.funtranslations.com/translate/"+lang+".json?text=";
selectLang.addEventListener("change",function(){
    lang = selectLang.value;
    url = "https://api.funtranslations.com/translate/"+lang+".json?text=";
})

btn.addEventListener("click",translator);



function errorHandler(error){
    alert("please try out after some time", error);
}


function translator(){
    fetch(url+inputValue.value)
    .then(response => response.json())
    .then(data => {
            outputBox.innerText = data.contents.translated;
        })
    .catch(errorHandler);
}