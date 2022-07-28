import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from './ImageGallery.module.css';

export default function ImageGallery({ images, error, status }) {
  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <ul className={style.list}>
        {images.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
