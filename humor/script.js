const botao = document.querySelector("#btxt");
const titulo = document.querySelector("#titulo");
const frase = document.querySelector("#frase");
const img1 = document.querySelector("#imgborda");
const background = document.getElementById("#header");
const div = document.querySelector("#div");

botao.addEventListener("click", ()=> {
   
    if (botao.value == "mudanca1"){
        titulo.style.color = "white";
        titulo.innerHTML = "Jogo do Humor da Tohru";
        frase.innerHTML = 
        `Tohru está feliz.`;
        frase.style.color = "white";
        img1.src = "feliz.jpg";
        document.getElementById("header").style.backgroundImage="url(fundo1.png)";
        document.getElementById("html").style.backgroundColor = "#4D9C4D";
        document.getElementById("a").style.backgroundColor = "#4D9C4D";
        document.getElementById("img").style.backgroundColor = "#4D9C4D";
        document.body.style.backgroundColor = "#4D9C4D";
        document.getElementById("a").style.borderColor = "#EEEE53";
        document.getElementById("img").style.borderColor = "#EEEE53";
        document.getElementById("a").style.backgroundColor = "#EEEE53";
        document.getElementById("img").style.backgroundColor = "#EEEE53";
        document.getElementById("header").style.padding = "10%";
        document.getElementById("div").style.flexDirection = "row";
        document.getElementById("div").style.justifyContent = "center";
        botao.value = "mudanca2";
    } else if (botao.value == "mudanca2"){
        titulo.style.color = "#B74035";
        frase.innerHTML = 
        `Vish, você irritou ela. 
        Acho melhor sair daqui.`;
        frase.style.color = "grey";
        img1.src = "mad.jpg";
        document.getElementById("header").style.backgroundImage="url(fundo2.jpg)";
        document.getElementById("html").style.backgroundColor = "#434753";
        document.getElementById("a").style.backgroundColor = "#434753";
        document.body.style.backgroundColor = "#434753";
        document.getElementById("a").style.borderColor = "#434753";
        document.getElementById("img").style.borderColor = "#434753";
        document.getElementById("img").style.backgroundColor = "#434753";
        botao.value = "mudanca3";
    } else if (botao.value == "mudanca3"){
        titulo.style.color = "black";
        frase.innerHTML = 
        `Deu merda.
                  Melhor correr!`;
        frase.style.color = "red";
        img1.src = "tohru3.gif";
        document.body.style.backgroundColor = "black";
        document.getElementById("html").style.backgroundColor = "black";
        document.getElementById("header").style.backgroundImage="url(fundo3.jpg)";
        document.getElementById("a").style.backgroundColor = "black";
        document.getElementById("img").style.backgroundColor = "black";
        document.getElementById("div").style.flexDirection = "column";
        document.getElementById("div").style.justifyContent = "center";
        document.getElementById("a").style.borderColor = "black";
        document.getElementById("img").style.borderColor = "black";
        document.getElementById("header").style.padding = "0px";
        botao.value = "mudanca1";
    }

});