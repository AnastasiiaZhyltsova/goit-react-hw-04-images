import style from './Button.module.css';

export default function Button({ onClickButton }) {
  return (
    <div className={style.buttonBox}>
      <button className={style.button} onClick={onClickButton}>
        Load more
      </button>
    </div>
  );
}
