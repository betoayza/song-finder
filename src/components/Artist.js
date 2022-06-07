import React from "react";
import "./Artist.css";

const Artist = ({ artist }) => {
  return (
    <div id="artist-div">
      <div id="presentation-div">
        <h3>{artist.strArtist}</h3>
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
        <p>
          {artist.intBornYear} - {artist.intDiedYear || "Present"}
        </p>
        <p>{artist.strCountry}</p>
        <p>
          {artist.strGenre} - {artist.strStyle}
        </p>
        <a
          href={`http://${artist.strWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          Oficial Web Site
        </a>
      </div>
      <div id="bio-div">
        <p id="bio-p">{artist.strBiographyEN}</p>
      </div>
    </div>
  );
};

export default Artist;
