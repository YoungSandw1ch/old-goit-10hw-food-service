import API from './01-api-service.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import pokemonTpl from '../templates/pokemon-card.hbs';

//======NH: dont work HBS custom helpers, but they registered========
// import Handlebars from 'handlebars';

// Handlebars.registerHelper('toCapitalize', toCapitalize);

// console.log(Handlebars);
// console.log(Handlebars.helpers.toCapitalize);

//===================================================================

const refs = {
  form: document.querySelector('.form'),
  container: document.querySelector('.js-container'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const id = form.elements.searche.value;

  API.fetchPokemon(id).then(renderMarkup).catch(fetchError).finally(resetForm);
}

function renderMarkup(pokemon) {
  const pokemonMarkup = pokemonTpl(pokemon);
  refs.container.innerHTML = pokemonMarkup;
}

function resetForm() {
  refs.form.reset();
}

function fetchError(error) {
  Notify.failure(
    `Извините возникла ошибка ${error.message}, попробуйте другой ID`,
    {
      timeout: 5000,
    },
  );
}

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
