//fundo preto

    let button = document.querySelector("#colorButton");
    let acessP = document.querySelector('.firstP');
    let buttonWhite = document.querySelector("#colorButtonWhite");
    acessP.style.backgroundColor = localStorage.getItem('colorChange');
function changeBackgroundColor() {

    acessP.style.backgroundColor = 'black';
    localStorage.setItem('colorChange', acessP.style.backgroundColor);


}

function changeBackgroundWhite(){
    acessP.style.backgroundColor = 'white'
    localStorage.setItem('colorChange', acessP.style.backgroundColor);
}


    button.addEventListener('click', changeBackgroundColor);
    buttonWhite.addEventListener('click', changeBackgroundWhite);




//cor do texto

    let textoCor = document.querySelector('#colorText');
    let textoBack = document.querySelector('#colorTextBlack');
    acessP.style.color = localStorage.getItem('TextChangeColor');
function changeTextColor() {
    acessP.style.color = 'red';
    localStorage.setItem('TextChangeColor', acessP.style.color);

}

function changeTextBack() {
    acessP.style.color = 'black';
    localStorage.setItem('TextChangeColor', acessP.style.color);
}

textoCor.addEventListener('click', changeTextColor);
textoBack.addEventListener('click', changeTextBack);

//Tamanho da fonte

    let getButtonFont = document.querySelector('#fontSizeBig');
    let getButtonBack = document.querySelector('#fontSizeBack')
    acessP.style.fontSize = localStorage.getItem('TextChangeSize');

function changeSizeText() {
    acessP.style.fontSize = '25px';
    localStorage.setItem('TextChangeSize', acessP.style.fontSize);
}

function changeSizeBack() {
    acessP.style.fontSize = '16px';
    localStorage.setItem('TextChangeSize', acessP.style.fontSize);
}

getButtonFont.addEventListener('click', changeSizeText);
getButtonBack.addEventListener('click', changeSizeBack);