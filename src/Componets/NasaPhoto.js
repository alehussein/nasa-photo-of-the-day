import React from "react";

const NasaPhoto = (props) => {
    return (
      <div className="nasaPhoto">
        
        <img src={props.photo.hdurl} />
        <h3>{props.photo.title}</h3>
        <p className="date">{props.photo.date}</p>
        <p className="copy">{props.photo.copyright}</p>
        <p className="explanation">{props.photo.explanation}</p>
      </div>
    )
  };


  export default NasaPhoto;