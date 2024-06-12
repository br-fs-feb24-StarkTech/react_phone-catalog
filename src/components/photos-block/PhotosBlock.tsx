import { useState } from 'react';
import { PhonesBlockProps } from '../../types/PhonesBlockProps';
import './PhotosBlock.scss';

// const product: Product = {
//   id: '',
//   category: '',
//   itemId: '',
//   name: '',
//   fullPrice: 0,
//   price: 0,
//   screen: '',
//   capacity: '',
//   color: '',
//   ram: '',
//   year: 0,
//   images: [
//     '/img/phones/apple-iphone-11/purple/00.webp',
//     '/img/phones/apple-iphone-11/purple/01.webp',
//     '/img/phones/apple-iphone-11/purple/02.webp',
//     '/img/phones/apple-iphone-11/purple/03.webp',
//     '/img/phones/apple-iphone-11/purple/04.webp',
//   ],
// };

export const PhotosBlock: React.FC<PhonesBlockProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="photos-block">
      <div className="list photos-block__list">
        {images.map(image => (
          <div className={`list__square ${selectedImage === image ? 'list__square--active' : ''} `}>
            <img
              className="list__image"
              src={image}
              alt="image"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      <div className="photos-block__selected">
        <img className="photos-block__selected-image" src={selectedImage} alt="selected image" />
      </div>
    </div>
  );
};
