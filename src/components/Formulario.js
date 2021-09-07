import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';


export const Formulario = ({ setBusqueda }) => {

    const [ termino, setTermino ] = useState('');
    const [ error, setError ] = useState( false );

    const buscarImagenes = ( e ) => {
        
        e.preventDefault();

        if ( termino.trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        setBusqueda( termino );
    }

    return (
        <form onSubmit={ buscarImagenes }>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen..."
                        onChange={ ({ target }) => setTermino(target.value) }
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-success btn-block"
                        value="Buscar"
                    />
                </div>

                <div className="form-group col-md-12">
                    { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
                </div>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    setBusqueda: PropTypes.func.isRequired
}
