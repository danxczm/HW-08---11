import axios from 'axios';

const API_KEY = '17779447-e69189bbb9578e7ff1877c42f';
const BASE_URL = 'https://pixabay.com/api/';

export default class PicturesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPictures() {
    const url = `${BASE_URL}?key=${API_KEY}&per_page=40&image_type=photo&lang=en,ru&orientation=horizontal&safesearch=true&page=${this.page}&q=${this.searchQuery}`;

    return await axios.get(url).then(data => {
      const hits = data.data;
      this.incrementPage();
      return hits;
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
