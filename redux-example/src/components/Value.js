import React from 'react';
import PropTypes from 'prop-types';

class Value extends React.Component {

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTyeps = {
    number: PropTypes.number
};
Value.defaultProps = {
    number: -1
};
export default Value;
