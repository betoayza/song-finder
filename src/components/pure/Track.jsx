import React, { useState } from "react";
import { Modal } from "./Modal";

export const Track = ({ track }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(track);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return isModalOpen ? (
    <Modal>
      <div className={""} style={{ display: "grid", placeItems: "center" }}>
        <h1>{track.title}</h1>
        <p>
          <span style={{ color: "coral" }}>{track.artist.name}</span>
        </p>
        <img
          src={track.artist.picture}
          className="img-fluid rounded-top img-thumbnail"
          alt="Artist"
        />
        <a href={track.artist.link} style={{ color: "cyan" }}>
          Artist site
        </a>
        <a href={track.link} style={{ color: "cyan" }}>
          Track site
        </a>
        <button className={"btn btn-outline-danger mt-2"} onClick={handleClose}>
          Close
        </button>
      </div>
    </Modal>
  ) : (
    <div className={"text-center text-break"}>
      <img
        src={track.album.cover}
        className="img-fluid rounded-top img-thumbnail"
        alt="Album"
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: "pointer" }}
      />
      <p>
        <span style={{ color: "yellowgreen", fontWeight: "bold" }}>
          {track.title}
        </span>
        <br />
        <span style={{ color: "white", fontStyle: "italic" }}>
          {" "}
          by {track.artist.name}
        </span>
      </p>
    </div>
  );
};
