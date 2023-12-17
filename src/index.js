import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchBreed, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_m2lgK5Nia1pd8DUl24UNtOhGRwIFqfFsx7kE9eRmryfEzHhp0uvjNBrqx2VKChqY';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('cat-info');
