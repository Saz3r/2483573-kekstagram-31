/* eslint-disable no-console */
import { loadPhotos,showDataErrorMessage } from './load-photos.js';
import { sendFormData , showSuccessWindow} from './new-photos-forms-handler.js';
import { getData } from './api.js';
import './load-photos.js';
import './open-close-full-photo.js';
import './new-photos-forms-handler.js';
import './filter-redactor.js';
const imgFilter = document.querySelector('.img-filters');


getData()
  .then((loadedPhotos) => {
    console.log(loadedPhotos);
    loadPhotos(loadedPhotos);
    imgFilter.classList.remove('img-filters--inactive');
  })
  .catch(
    () => showDataErrorMessage()
  );
sendFormData(showSuccessWindow);

