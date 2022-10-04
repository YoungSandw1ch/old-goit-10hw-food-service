import '../css/common.css';
import API from './01-api-service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import pokemonTpl from '../templates/pokemon-card.hbs';
// import Handlebars from 'handlebars';
// // import makeRefs from './01-make-refs';
// // import handlebarsHelper from './handlebars-helper';

// Handlebars.registerHelper('toCapitalize', function (str) {
//   return str.charAt(0).toUpperCase() + string.slice(1);
// });

// console.log(Handlebars);
// console.log(toCapitalize);

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

  console.log(pokemon);
  console.log(pokemonMarkup);
  console.log(refs.container);
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
