import style from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClickButton }) {
  return (
    <div className={style.buttonBox}>
      <button className={style.button} onClick={onClickButton}>
        Load more
      </button>
    </div>
  );
}
Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
