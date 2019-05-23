import { takeEvery } from 'redux-saga/effects';
import * as allSagas from './sagas/all.saga';

function* rootSaga() {
    const allSagaKeys = Object.keys(allSagas);

    allSagaKeys.forEach((sagaKey, sagaIndex) => {
        yield takeEvery(sagaKey, allSagas[sagaKey]);
    });
}

export default rootSaga;