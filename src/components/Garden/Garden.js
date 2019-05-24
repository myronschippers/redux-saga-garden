import React from 'react';
import NewPlantForm from '../NewPlantForm/NewPlantForm';
import PlantList from '../PlantList/PlantList';
import Grid from '@material-ui/core/Grid';

const Garden = props => (
  <div>
    <h2>Saga Garden!</h2>
    <Grid
      container
      justify="center"
      spacing={3}
    >
        <Grid item xs={3}>
          <NewPlantForm />
        </Grid>
        <Grid item xs={9}>
          <PlantList />
        </Grid>
    </Grid>
    {/* Redux State isn't needed in the garden, it is just a parent component */}
    {/* Thanks to redux, there is no need to pass along props! */}
  </div>
);

export default Garden;
