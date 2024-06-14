import { useEffect, useState } from 'react';
import './PhotosBlock.scss';

type Props = {
  images: string[];
};

export const PhotosBlock: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="photos-block">
      <div className="list photos-block__list">
        {images?.map(image => (
          <div
            key={image}
            className={`list__square ${selectedImage === image ? 'list__square--active' : ''}`}
          >
            <img
              className="list__image"
              src={`.././${image}`}
              alt="image"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      <div className="photos-block__selected">
        <img
          className="photos-block__selected-image"
          src={`.././${selectedImage}`}
          alt="selected image"
        />
      </div>
    </div>
  );
};
