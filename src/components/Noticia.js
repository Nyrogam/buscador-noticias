import React from "react";

const Noticia = ({ noticia }) => {
  const {
    url,
    image,
    description,
    source: { name },
    title,
  } = noticia;

  const imagen = image ? (
    <div className="card-image">
      <img src={image} alt={title} />
      <span className="card-title">{name}</span>
    </div>
  ) : null;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imagen}

        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
