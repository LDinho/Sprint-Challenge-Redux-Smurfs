import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';
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
                <Smurf key={smurf.id}
                       smurf={smurf}
                       deleteSmurf={this.props.deleteSmurf}

                />
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
    {
      getSmurfs,
      deleteSmurf,
    }
  )(Smurfs)
);
