import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

class PlantList extends Component {
    handlerDeletePlant = (event) => {
        console.log('delete plant');
    }

    render() {
        const {
            plant,
        } = this.props;
        return (
            <div>
                <h4>{plant.name}</h4>
                <div>
                    <button onClick={this.handlerDeletePlant}>DELETE</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(PlantList);