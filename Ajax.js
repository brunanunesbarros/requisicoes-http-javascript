let requisicoes = new XMLHttpRequest();
requisicoes.responseType = "json";

function verDog() {
    requisicoes.open("GET", "https://api.thedogapi.com/v1/images/search");
    requisicoes.send();
}

function urlDog(url) {
    document.getElementsByTagName("img")[0].setAttribute("src", url);
    document.querySelector("div").classList.add("estilo-span");
}

function descriptionDog(name, temperament) {
    document.getElementsByTagName("img")[0].setAttribute("alt", name);
    document.getElementsByTagName("span")[0].innerHTML = `<b>Nome:</b> ${name}`;
    document.getElementsByTagName("span")[1].innerHTML = `<b>Temperament:</b> ${temperament}`;
}


function noResults() {
    document.getElementsByTagName("span")[0].innerHTML = "Não temos o nome desse dog.";
    document.getElementsByTagName("span")[1].innerHTML = "Também não sabemos o seu temperamento";
}

requisicoes.onreadystatechange = function () {
    if (requisicoes.readyState == 4 && requisicoes.status == 200) {
        let result = requisicoes.response[0];
        
        urlDog(result.url);
        
        if (result.breeds && result.breeds.length <= 0) {
            noResults();
        } else {
            descriptionDog(result.breeds[0].name, result.breeds[0].temperament)
        }
    }
};

