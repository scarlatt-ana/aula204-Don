let emocionalDaAna = document.querySelector("p");
let titulo = document.querySelector ("h1");
let corpo = document.querySelector ("body");
let imagem = document.querySelector ("img");
let botao = document.querySelector ("button");
let botao2 = document.querySelector (".feliz");


//TROCAR O HUMOR DA ANA
function darChocolate(){
    corpo.style.backgroundColor = "yellow";

    emocionalDaAna.innerHTML ="A ana fica feliz ao ganhar CHOCOLATE";

    imagem.src= "https://img3.stockfresh.com/files/d/dejanj01/m/14/1407816_stock-photo-smileys.jpg";

    botao.innerHTML="GANHEI UM CHOCOLATE";
}
    botao.onclick=darChocolate;



function estoutriste(){
    corpo.style.backgroundColor = "grey";

    emocionalDaAna.innerHTML ="Ana esta triste";

    imagem.src= "https://previews.123rf.com/images/kazit/kazit1608/kazit160800067/61681647-what-emoji-do-not-understand-emotion-puzzled-emoticon-vector-illustration-smile-icon-.jpg";

    botao.innerHTML="Não ganhei chocolate";
}

botao2.onclick=estoutriste;
// MANIPULANDO HTML
titulo.innerHTML = "EMOCIONAL DA ANA!";
titulo.style.color = "black";

// MANIPULANDO CSS
emocionalDaAna.style.fontSize = "8pt";
corpo.style.backgroundColor = "yellow";



