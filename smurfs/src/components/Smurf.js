import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveUpdatedSmurf, updatingSmurf } from '../actions'

class Smurf extends Component  {
  constructor(props) {
    super(props);

    const {smurf: {name, age, height}} = this.props;

    this.state = {
      name: name,
      age: age,
      height: height,
    }
  }

  editSmurf = () => {
    const {smurf: {id}} = this.props;
    this.props.updatingSmurf(id);
  }

   cancelEditSmurf = () => {
    this.props.updatingSmurf(null);
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

    const updatedSmurf = {
      id,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    this.props.saveUpdatedSmurf(updatedSmurf)
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

            <label> Email:
              <input
                type="string"
                name="email"
                onChange={this.handleInputChange}
                placeholder="Enter email"
                value={this.state.height}
              />
            </label>
            { this.props.error &&
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
