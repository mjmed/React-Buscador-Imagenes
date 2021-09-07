import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { ListadoImagenes } from './components/ListadoImagenes';


const App = () => {

    const [ busqueda, setBusqueda ] = useState('');
    const [ imagenes, setImagenes ] = useState([]);

    // estados para la paginación
    const [ paginaActual, setPaginaActual ] = useState(1);
    const [ totalPaginas, setTotalPaginas ] = useState(1);

    useEffect(() => {

        const consultarApi = async() => {

            if ( busqueda === '' ) return;
    
            const imagenesPorPagina = 30;
            const key = '23276109-991905913bd01dcfe3f963bcd';
            const url = `https://pixabay.com/api/?key=${ key }&q=${ busqueda }&per_page=${ imagenesPorPagina }&page=${ paginaActual }`;
            
            const respuesta = await fetch( url );
            const imagenes = await respuesta.json();

            setImagenes( imagenes.hits );

            // calcular el total de páginas
            const calcularTotalPaginas = Math.ceil( imagenes.totalHits / imagenesPorPagina );
            setTotalPaginas( calcularTotalPaginas );

            // Mover la pantalla hacia arriba
            const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({ behavior: 'smooth' });
        }

        consultarApi();        

    }, [ busqueda, paginaActual ]);

    const paginaAnterior = () => {

        const nuevaPaginaActual = paginaActual - 1;

        // evitar que vaya a los valores negativos
        if ( nuevaPaginaActual === 0 ) return;

        setPaginaActual( nuevaPaginaActual );
    }

    const paginaSiguiente = () => {

        const nuevaPaginaActual = paginaActual + 1;

        if ( nuevaPaginaActual > totalPaginas ) return;

        setPaginaActual( nuevaPaginaActual );
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>

                <Formulario setBusqueda={ setBusqueda } />
            </div>

            <div className="row justify-content-center">
                <ListadoImagenes imagenes={ imagenes } />

                {(paginaActual === 1)
                    ? null
                    : (
                        <button
                            type="button"
                            className="btn btn-primary mr-1"
                            onClick={ paginaAnterior }
                        >
                            &laquo; Anterior
                        </button>
                    )
                }

                {(paginaActual === totalPaginas)
                    ? null
                    : (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ paginaSiguiente }
                        >
                            Siguiente &raquo;
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default App;
