import 'react-photo-album/rows.css';

import React from 'react';

import { RowsPhotoAlbum } from 'react-photo-album';

const photos = [
  { src: "./walter.webp", width: 1600, height: 900 },
  { src: "./denmark.webp", width: 800, height: 600 },
  { src: "./nike.webp", width: 1600, height: 900 },
  { src: "./paint.webp", width: 1600, height: 900 },
  { src: "./pig.webp", width: 1600, height: 900 },
];

export default function ColorTheory() {
  return (
    <div>
      <h1>Color Theory</h1>
      <RowsPhotoAlbum photos={photos} />;
    </div>
  );
}
