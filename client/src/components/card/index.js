import React from 'react';


function Card({id, title, subtitle, image, children, onClick}) {
  return (
    <div className="card">
      {image && (
        <div className="card-image clickable"
          onClick={()=>{
            onClick && onClick({id, title, subtitle, image});
          }}>
          <figure className="image is-4by3">
            <img src={image} alt={title}/>
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            {title && (
              <p className="title is-4 has-text-grey-darker">
                {title}
              </p>
            )}
            {subtitle && (
              <p className="subtitle is-6 has-text-grey-light">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {children && (
          <div className="content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
