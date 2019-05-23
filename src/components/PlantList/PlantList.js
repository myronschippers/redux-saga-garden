import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import PlantItem from '../PlantItem/PlantItem';

class PlantList extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.props.dispatch({
            type: 'GET_PLANTS',
        });
    }

    render() {
        const plantElements = this.props.reduxState.plantList.map((plant, plantIndex) => {
            return <PlantItem key={plantIndex} plant={plant} />
        });

        return (
            <div>
                <h3>This is the plant list</h3>

                <div>
                    {plantElements}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);
