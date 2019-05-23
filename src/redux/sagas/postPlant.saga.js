import { put } from 'redux-saga/effects';
import axios from 'axios';

function* postPlants(action) {
    try {
        yield axios.post('/api/plant', action.payload);
        yield put({
            type: 'GET_PLANTS',
        });
    } catch(err) {
        console.log('Error getting data: ', err);
    }
}

export default postPlants;
