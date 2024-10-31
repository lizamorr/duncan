import React from 'react';

export default function PhotoGrid({ photos }: any) {
  return (
    <div className="masonry-grid p-4">
      {photos.map((photo: any, index: number) => (
        <div
          key={index}
          className="masonry-item overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={photo.src}
            alt={`Art ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
