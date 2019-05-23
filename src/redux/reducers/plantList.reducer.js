// this startingPlantArray should eventually be removed
const startingPlantArray = [
    { id: 1, name: 'Rose' },
    { id: 2, name: 'Tulip' },
    { id: 3, name: 'Oak' }
];
  
const plantList = (state = startingPlantArray, action) => {
    switch (action.type) {
        case 'ADD_PLANT':
            return [ ...state, action.payload ];
        case 'NEW_PLANTS_LIST':
            return [ ...action.payload ];
        default:
            return state;
    }
};

export default plantList;