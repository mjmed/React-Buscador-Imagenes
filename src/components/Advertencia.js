import React from 'react';
import PropTypes from 'prop-types';


export const Advertencia = ({ mensaje }) => {
    return (
        <p className="my-3 p-4 text-center alert alert-warning">
            { mensaje }
        </p>
    )
}

Advertencia.propTypes = {
    mensaje: PropTypes.string.isRequired
}