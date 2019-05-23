import getPlants from './getPlants.saga';
import postPlant from './postPlant.saga';

const allSagas = {
    'GET_PLANTS': getPlants,
    'POST_PLANT': postPlant,
};

export default allSagas;
