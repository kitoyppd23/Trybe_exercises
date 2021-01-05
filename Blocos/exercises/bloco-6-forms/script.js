const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function creatState(){
  let getSelectField = document.querySelector('#state-field');

  for(i = 0; i < stateOptions.length; i += 1) {
    let state = document.createElement('option');
    state.innerHTML = stateOptions[i];
    getSelectField.appendChild(state);
  }
}
creatState()

const clickButton = document.querySelector('#click-button');

function buttonSend(event) {
  event.preventDefault();
  const div = document.createElement('div');
  div.classList.add('new');
  const body = document.querySelector('body');
  body.appendChild(div);
  const all = document.querySelectorAll('.input');
  for(let index = 0; index < all.length; index += 1) {
    const p = document.createElement('p');
    p.innerHTML = all[index].value;
    div.appendChild(p);
  }

}
clickButton.addEventListener('click', buttonSend);
button = document.querySelector('#clear-button')

function clinButton() {
  const divNew = document.querySelector('.new');
  divNew.remove();
}
button.addEventListener('click', clinButton);