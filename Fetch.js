function verDog() {
    fetch("https://api.thedogapi.com/v1/images/search")
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            urlDog(response[0].url);

            if (response.length > 0 && response[0].breeds.length <= 0) {
                noResults();
            } else {
                let details = response[0].breeds[0];
                descriptionDog(details.name, details.temperament);
            }
        })
        .catch((error) => {
            alert("Ops, algo deu errado!")
            console.error(error);
        });
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
