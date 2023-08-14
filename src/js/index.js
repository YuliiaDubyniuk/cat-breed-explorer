import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('select');
const loaderInf = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');
const catInfoBox = document.querySelector('.cat-info');

fetchBreeds()
  .then(resp => {
    breedSelect.innerHTML = createSelectMarkup(resp.data);
    breedSelect.classList.remove('hidden');
    replaceClass('loader', 'hidden');
    new SlimSelect({
      select: '#js-select',
    });
  })
  .catch(() => { Notify.failure(errorMessage.textContent) });

breedSelect.addEventListener('change', onSelect);

function onSelect(evt) {
  catInfoBox.innerHTML = '';
  let breedId = evt.target.value;
  replaceClass('hidden', 'loader');

  fetchCatByBreed(breedId)
    .then(resp => {
      catInfoBox.innerHTML = createCatInfoMarkup(resp.data);
      replaceClass('loader', 'hidden');
    })
    .catch(() => { Notify.failure(errorMessage.textContent) });
}

function createSelectMarkup(arr) {
  return arr
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join();
}

function createCatInfoMarkup({
  0: {
    breeds: {
      0: { description, name, temperament },
    },
    url,
  },
}) {
  return `<img class="cat-img" src="${url}" alt="${name}" width="500">
    <div class="cat-text">
    <h1 class="breed">${name}</h1>
    <p class="description">${description}</p>
    <p class="temperament"><b>Temperament:</b> ${temperament}</p>
    </div>`;
}

function replaceClass(one, another) {
  loaderInf.classList.replace(one, another);
}
