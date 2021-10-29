## Estudo sobre requisições Htpp com Javascript

Para que nossa aplicação faça a troca de dados (envio e resposta) com algum servidor é necessário realizarmos uma conexão entre ela e algum servidor. Melhor ainda se for de uma forma que não trave a navegação do usuário, ou seja, precisamos de algo assíncrono, que execute em segundo plano. 
Para aqueles que como eu estão iniciando nesse assunto, vou deixar alguns links com os temas que estudei.

## XMLHttpRequest

O XMLHttpRequest é um objeto disponível em algumas linguagens de script para navegadores da web, como Javascript. Com ele conseguimos nos comunicar com algum servidor da web, de forma assíncrona (também podemos setar para síncrono) e realizar as famosas requisições Htpp ou Https.

Apesar do nome, ele não lida apenas com [XML](https://www.w3schools.com/xml/), mas com qualquer tipo de dado.
Esse objeto fornece diversos métodos para que seja possível realizar, acompanhar e tratar as requisições.

Um detalhamento maior sobre esse objeto você encontra [aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest). 

## AJAX

O Ajax não é uma linguagem de programação, é o uso de tecnologias como Javascript, XML, HTML, CSS, XMLHttpRequest, entre outras, com o objetivo de realizarmos requisições Htpp de forma assíncrona, essas disparadas pelos mais diversos eventos como um click de um botão, tendo a forte característica de a página web não precisar ser regarreda.
Em resumo, com Ajax podemos enviar e receber dados de um servidor em segundo plano sem recarregamento da página.

Para mais detalhes acesse [aqui](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started).

## Fetch API

Fetch API fornece uma interface para realizarmos as requisições Htpp de forma assíncrona assim como o XMLHttpRequest, só que mais simples e com recursos mais poderosos e flexíveis através do uso de Promises.

Para saber mais leia [aqui](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API). 

## Minha Aplicação

Em resumo, escolhi uma API gratuita chamada [The Dog API](https://thedogapi.com/) para que eu pudesse realizar minhas requisições Http. 
No projeto tenho dois arquivos .js onde pratico os conceitos de Ajax e Fetch para fazer as requisições. 
O objetivo da aplicação era conseguir renderizar via DOM a foto, nome e temperamento de cachorros aleatórios através da API citada acima. 
Não tenho uma opinião formada no momento, mas achei a sintaxe do Fetch mais amigável.
Minha dificuldade se dá no tratamento da resposta do servidor, como interpretar a resposta, acessá-la e formatá-la. 

 