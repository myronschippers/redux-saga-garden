import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
    { id: 1, name: 'Rose' },
    { id: 2, name: 'Tulip' },
    { id: 3, name: 'Oak' }
];
  
const plantList = (state = startingPlantArray, action) => {
    switch (action.type) {
        case 'ADD_PLANT':
            return [ ...state, action.payload ]
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        plantList,
    }),
    applyMiddleware(logger),
);

export default store;