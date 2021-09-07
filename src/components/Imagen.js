import React from 'react';
import PropTypes from 'prop-types';


export const Imagen = ({ imagen }) => {

    const { largeImageURL, likes, previewURL, tags, views, downloads } = imagen;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={ previewURL } alt={ tags } className="card-img-top" />

                <div className="card-body">
                    <p className="card-text"><i className="bi bi-heart" role="img" aria-label="Likes" style={{ marginRight: 8 }}></i> { likes }</p>
                    <p className="card-text"><i className="bi bi-eye" role="img" aria-label="Views" style={{ marginRight: 8 }}></i> { views }</p>
                    <p className="card-text"><i className="bi bi-download" role="img" aria-label="Views" style={{ marginRight: 8 }}></i> { downloads }</p>
                </div>

                <div className="card-footer">
                    <a
                        href={ largeImageURL }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
    )
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
}
