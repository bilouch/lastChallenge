// // const keyOpenWheater=94f71e7e0f2eb3b9b02fcebc64df0b0c;
// let url= 'https://api.openweathermap.org/data/2.5/weather?q=Alger&appid=94f71e7e0f2eb3b9b02fcebc64df0b0c&units=metric&lang=fr';
// fetch(url).then(Response=>Response.json().then(data=>{
//     console.log(data);
//     document.querySelector(".ville").innerHTML=data.name;
//     document.querySelector(".description").innerHTML=data.weather[0].description;
//     document.querySelector(".tempirateur").innerHTML=data.main.temp+"°";
//     document.querySelector(".vent").innerHTML=data.wind.speed+"Km/h";
//     document.querySelector(".humid").innerHTML=data.main.humidity+"%";
//     var iconurl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     document.querySelector("#wicon").setAttribute("src",iconurl);
// }));
// // fetch(url).then(function(Response){return Response.json().then(function(data){console.log(data)}) });

function trouverLaville(nomVille="Alger"){
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${nomVille}&appid=94f71e7e0f2eb3b9b02fcebc64df0b0c&units=metric&lang=fr`;
    fetch(url).then(Response=>Response.json().then(data=>{
        console.log(data);
        document.querySelector(".ville").innerHTML=data.name;
        document.querySelector(".description").innerHTML=data.weather[0].description;
        document.querySelector(".tempirateur").innerHTML=data.main.temp+"°";
        document.querySelector(".vent").innerHTML=data.wind.speed+"Km/h";
        document.querySelector(".humid").innerHTML=data.main.humidity+"%";
        var iconurl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector("#wicon").setAttribute("src",iconurl);
    }));    
}
trouverLaville();//porquoi ca marche 'Paris' et "Paris" ca marche pas ?????

function onclick(){
  let nonVille=  document.querySelector('#nom-ville').value;
  console.log(nonVille);
}