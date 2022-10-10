const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'bc964c2173954576ae1b4bb3a5d64612';
const options = {
  headers: {
    'X-Api-Key': API_KEY,
  },
};

export default class FetchNewsService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchNews() {
    return fetch(
      `${BASE_URL}/everything?q=${this.searchQuery}&page=${this.page}&pageSize=5`,
      options,
    )
      .then(response => response.json())
      .then(({ articles }) => articles);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  pageIncrement() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
