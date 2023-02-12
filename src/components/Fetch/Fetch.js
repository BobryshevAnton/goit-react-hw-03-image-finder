// import axios from 'axios';
// https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=yellow+flowers&image_type=photo

// const API_KEY = '32040937-f5067777972aaaf890ed94a62';

// const baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'horizontal',
//   per_page: 15,
// };

export const fetchImg = (page, searchQuery) => {
  const { data } = fetch(
    `https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=cat&image_type=photo&page=${page}&per_page=15`
  );

  return data;
};
//ошибка
// https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=cat&page=1&orientation=landscape&per_page=15
// https://pixabay.com/api/?key=32040937-f5067777972aaaf890ed94a62&q=yellow+flowers&image_type=photo
