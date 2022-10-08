import FetchNewsService from './02-news-api';
import articlesTpl from '../templates/news-articles.hbs';

const refs = {
  form: document.querySelector('.js-search-form'),
  submitBtn: document.querySelector('.js-submit'),
  articles: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('.button'),
};

const newsFetcher = new FetchNewsService();
console.log(newsFetcher);

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  if (!searchQuery) {
    alert('введите что то в поиск');
    return;
  }

  newsFetcher.query = form.elements.query.value;

  newsFetcher.fetchNews().then(renderNews).finally(form.reset());
}

function onLoadMore() {
  console.log('load more');
}

function renderNews(articles) {
  console.log(articles);
  const articlesMarkup = articlesTpl(articles);
  refs.articles.innerHTML = articlesMarkup;
}
