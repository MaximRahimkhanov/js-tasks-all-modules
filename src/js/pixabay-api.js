import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(query, page) {
  const API_KEY = '51719730-f0601b97791df742fe437894d';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15
  };

  try {
    const res = await axios.get(BASE_URL, { params });
    return res.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Не вдалося отримати зображення: ${error.message}`,
      position: 'topRight',
      timeout: 5000
    });
    return { hits: [], totalHits: 0 };
  }
}

