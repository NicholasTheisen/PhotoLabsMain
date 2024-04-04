import React from 'react';

import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';
import { useState } from 'react';

// const sampleDataForPhotoListItem = {
//   id: 1,
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [fav, setFav] = useState(false);
  const favPhoto = () => {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
  };


  // const photos = [...Array(3)];
  // const list = photos.map((photo, i) => <PhotoListItem key={i} photoData={sampleDataForPhotoListItem} fav={fav} favPhoto={favPhoto} />);

  return (
    <div className="App">
      <TopNavigationBar />
      <TopicList />
      <PhotoList fav={fav} favPhoto={favPhoto} />
    </div>
  );
};

export default App;

