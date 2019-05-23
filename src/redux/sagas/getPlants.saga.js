import { put } from 'redux-saga';
import axios from 'axios';

function* getPlants() {
    try {
        const plantsResponse = yield axios.get('/api/plants');
        console.log('plantsResponse: ', plantsResponse);
        yield put({
            type: 'NEW_PLANTS_LIST',
            payload: plantsResponse.data,
        });
    } catch(err) {
        console.log('Error getting data: ', err);
    }
}

export default getPlants;
