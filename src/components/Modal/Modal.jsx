import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, bigImage }) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.hendleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.hendleKeyDown)
  // }
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <img src={bigImage} alt="" className={style.image} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  bigImage: PropTypes.string.isRequired,
};

export default Modal;
