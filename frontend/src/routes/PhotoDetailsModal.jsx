import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { setModalData, modalPhotoData, updateFavouritedPhotoIDs } = props;

  const item = modalPhotoData;
  // console.log(item.similarPhotos);

  console.log(modalPhotoData);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={() => setModalData(false, {})} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__images_and_icon">
          <PhotoFavButton
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
            item={item}
          />
          <img src={item.urls.regular} className="photo-details-modal__image" alt="main image" />
        </div>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={item.user.profile} alt="profile photos" />
          <div >
            <p className="photo-list__user-info">{item.user.username}</p>
            <p className="photo-list__user-location">{item.location.city} {item.location.country}</p>
          </div>
        </div>
        <h1 className="photo-details-modal__header">Similar Photos</h1>

        {/* check styling name */}
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(item.similarPhotos)}
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
          />
        </div>
      </div>
    </div >
  );
};

export default PhotoDetailsModal;