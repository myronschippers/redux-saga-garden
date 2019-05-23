import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';

class NewPlantForm extends Component {
    state = {
        newPlant: {
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: '',
        }
    }

    handleFieldChange = event => {
        const plantKey = event.target.dataset.key;
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [plantKey]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                name: '',
                kingdom: '',
                clade: '',
                order: '',
                family: '',
                subfamily: '',
                genus: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input
                        type="text"
                        data-key="name"
                        placeholder="Name"
                        value={this.state.newPlant.name}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="kingdom"
                        placeholder="Kingdom"
                        value={this.state.newPlant.kingdom}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="clade"
                        placeholder="Clade"
                        value={this.state.newPlant.clade}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="order"
                        placeholder="Order"
                        value={this.state.newPlant.order}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="family"
                        placeholder="Family"
                        value={this.state.newPlant.family}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="subfamily"
                        placeholder="Subfamily"
                        value={this.state.newPlant.subfamily}
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        data-key="genus"
                        placeholder="Genus"
                        value={this.state.newPlant.genus}
                        onChange={this.handleFieldChange}
                    />

                    <div>
                        <input
                            type="submit"
                            value="Add New Plant"
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
