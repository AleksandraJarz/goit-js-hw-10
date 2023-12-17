import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_m2lgK5Nia1pd8DUl24UNtOhGRwIFqfFsx7kE9eRmryfEzHhp0uvjNBrqx2VKChqY';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('cat-info');

error.style.display = 'none';

// lista ras
breeds.style.display = 'none';
fetchBreeds()
  .then(data => {
    const html = data.map(
      breed => 'option value= "${breed.id}">"${breed.name}"</option>'
    );
    breeds.innerHTML = html;
    breeds.style.display = 'block';
    loader.style.display = 'none';
  })
  .catch(errpr => Notiflix.Notify.failure('Error loading breeds'));
