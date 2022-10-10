import FetchNewsService from './02-news-api';
import articlesTpl from '../templates/news-articles.hbs';
import SpinnerBtn from './02-buttons-spinner';

const refs = {
  form: document.querySelector('.js-search-form'),
  articles: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsFetcher = new FetchNewsService();
const searchBtn = new SpinnerBtn('.js-submit');
const loadMoreBtn = new SpinnerBtn('[data-action="load-more"]');

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newsFetcher.resetPage();
  newsFetcher.query = form.elements.query.value;

  if (!newsFetcher.searchQuery) {
    alert('введите что то в поиск');
    return;
  }

  searchBtn.disable();

  newsFetcher
    .fetchNews()
    .then(renderNews)
    .finally(() => {
      loadMoreBtn.btnShow();
      searchBtn.enable();
      form.reset();
    });
}

function onLoadMore() {
  newsFetcher.pageIncrement();
  loadMoreBtn.disable();
  newsFetcher
    .fetchNews()
    .then(renderMoreNews)
    .finally(() => {
      loadMoreBtn.enable();
      loadMoreBtn.changeText('Загрузить еще');
    });
}

function renderNews(articles) {
  const articlesMarkup = articlesTpl(articles);
  refs.articles.innerHTML = articlesMarkup;
}

function renderMoreNews(articles) {
  const articlesMarkup = articlesTpl(articles);
  refs.articles.insertAdjacentHTML('beforeend', articlesMarkup);
}

function resetSearchQuery() {
  newsFetcher.query = '';
}

//=====================================
// function toggleBtnSpinner(form) {
//   const searchBtn = form.elements.btn;
//   const spinner = searchBtn.firstElementChild;
//   const isDisabled = searchBtn.hasAttribute('disabled');

//   if (isDisabled) {
//     searchBtn.removeAttribute('disabled', true);
//   } else {
//     searchBtn.setAttribute('disabled', true);
//   }

//   spinner.classList.toggle('is-hidden');
// }
