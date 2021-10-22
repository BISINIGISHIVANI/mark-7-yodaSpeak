var btnPrimary=document.querySelector("#translate-button");
var translateInput=document.querySelector("#translate-input");
var translateOutput=document.querySelector("#translate-output");

var serverURL="https://api.funtranslations.com/translate/yoda.json"
 

    function getTranslationURL(input){
    return serverURL+"?text="+input;
}

function errorHandler(error){
    console.log("error occured",error);

}

function clickHandler(){
    var inputData=translateInput.value;
    fetch(getTranslationURL(inputData))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        translateOutput.innerText=translatedText;
    });
   
}
btnPrimary.addEventListener("click",clickHandler);



