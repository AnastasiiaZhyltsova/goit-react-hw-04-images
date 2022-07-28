import { useState } from 'react';
import Modal from '../Modal/Modal';
import style from './ImageGalleryItem.module.css';

function ImageGalleryItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  console.log(showModal);

  return (
    <li className={style.item}>
      <img
        src={item.webformatURL}
        alt=""
        className={style.image}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal onClose={toggleModal} bigImage={item.largeImageURL} />
      )}
    </li>
  );
}

export default ImageGalleryItem;
