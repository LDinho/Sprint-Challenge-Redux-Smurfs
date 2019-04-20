import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class Smurfs extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <section className="smurfs-list">


        <ul>
          {this.props.smurfs.map( (smurf) => {
              return (
                <Smurf key={smurf.id} smurf={smurf}/>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({smurfs, isLoading}) => ({
  smurfs,
  isLoading,
});

export default (
  connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs)
);
