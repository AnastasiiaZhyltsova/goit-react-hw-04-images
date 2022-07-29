import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

import style from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  //  при сабмите формы вызываю метод из App и передаю ему значние state из этого класса
  // значение searchQuery eпередается параметром в метод handleSearchbarSubmit
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    // setSearchQuery('');
  };

  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="submit" className={style.button}>
          <span className={style.buttonLabel}>
            <FcSearch className={style.svg} />
          </span>
        </button>

        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
