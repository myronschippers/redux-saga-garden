import getPlants from './getPlants.saga';
import postPlant from './postPlant.saga';
import deletePlant from './deletePlant.saga';

const allSagas = {
    'GET_PLANTS': getPlants,
    'POST_PLANT': postPlant,
    'DELETE_PLANT': deletePlant,
};

export default allSagas;
