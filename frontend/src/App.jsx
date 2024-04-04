import React from 'react';

import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import { useState } from 'react';

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


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;

