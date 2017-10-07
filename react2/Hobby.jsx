import React from 'react';
import PropTypes from 'prop-types';

class Hobby extends React.Component {
  render() {
    return (<li>{this.props.hobby}</li>);
  }
}

Hobby.propTypes = {
  hobby: PropTypes.string.isRequired
};

export default Hobby;