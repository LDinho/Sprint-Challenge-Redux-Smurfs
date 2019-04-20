import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = (event) => {
    event.preventDefault();
    const newSmurf = {
      ...this.state,
    }
    this.props.addSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: '',
    });
    this.props.history.push("/");
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-wrapper">

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = ({smurfs, addingSmurf, isLoading}) => ({
  smurfs,
  isLoading,
  addingSmurf,
});

export default (
  connect(
    mapStateToProps,
    { addSmurf }
  )(SmurfForm)
);
