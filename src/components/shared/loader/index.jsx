import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export class Loader extends Component {
  render() {
    const {show} = this.props;

    return (
      <div className={`loader circles ${show ? 'show' : ''}`}>
        <span/>
        <span/>
        <span/>
      </div>
    );
  }
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired
};
