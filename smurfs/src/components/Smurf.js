import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUpdatedSmurf, updatingSmurf } from '../actions'

class Smurf extends Component  {
  constructor(props) {
    super(props);

    const {smurf: {name, age, height}} = this.props;

    this.defaultState = {
      name: name,
      age: age,
      height: height,
      hasError: false,
    }

    this.state = this.defaultState;
  }

  editSmurf = () => {
    const {smurf: {id}} = this.props;
    this.props.updatingSmurf(id);
  }

   cancelEditSmurf = (e) => {
    e.preventDefault();
    this.props.updatingSmurf(null);

    this.setState(this.defaultState);
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {smurf: {id}} = this.props;
    const { name, age, height } = this.state;

    const updatedSmurf = {
      id,
      name,
      age,
      height,
    };

    if (!name || !age || !height) {
      this.setState({hasError: true});
      return;
    }

    this.props.saveUpdatedSmurf(updatedSmurf);

    if (this.state.hasError) {
      this.setState({hasError: false});
    }
  }

  render () {
    const {
      deleteSmurf,
      smurfInEditMode,
      smurf: {id, name, age, height}
    } = this.props;

    if (smurfInEditMode === id) {
      return (
        <div className="smurf-card">
          <form className="form-edit" onSubmit={this.handleSubmit}>
            <label> Name:
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                placeholder="Enter name"
                value={this.state.name}
              />
            </label>

            <label> Age:
              <input
                type="number"
                name="age"
                onChange={this.handleInputChange}
                placeholder="Enter age"
                value={this.state.age}
              />
            </label>

            <label> Height:
              <input
                type="string"
                name="height"
                onChange={this.handleInputChange}
                placeholder="Enter height"
                value={this.state.height}
              />
            </label>
            { this.state.hasError &&
            <p>
              Please fill out all fields!
            </p>
            }
            <button type="submit">Save</button>
            <button type="button"
                    onClick={this.cancelEditSmurf}>
              Cancel
            </button>
          </form>
        </div>
      )
    } else {

      return (
        <li className="smurf-card">
          <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
          </div>
          <button className='button-delete'
                  onClick={() => deleteSmurf(id)}>
            Delete
          </button>
          <button className='button-edit'
                  onClick={this.editSmurf}>
            Edit
          </button>
        </li>
      )
    }
  }
}

const mapStateToProps = ({smurfs, isLoading, smurfInEditMode, error}) => ({
  smurfs,
  isLoading,
  smurfInEditMode,
  error,
});

export default (
  connect(
    mapStateToProps,
    {
      saveUpdatedSmurf,
      updatingSmurf,
    }
  )(Smurf)
);
