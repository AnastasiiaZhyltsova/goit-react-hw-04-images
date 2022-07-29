import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.css';

function ImageGalleryItem({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
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
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
