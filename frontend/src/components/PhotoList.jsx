import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  // your sample data
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photoData) => (
        <PhotoListItem key={photoData.id} photoData={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
