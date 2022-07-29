import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const key = '27868120-ecbda89988110022223138572';
    console.log('делаем фетч');
    setResponse(true);
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(res => {
          console.log(res);
          if (!res.total) {
            return Promise.reject(new Error(`Нет такого ${searchQuery}`));
          }
          setImages(images => [...images, ...res.hits]);
          setStatus('resolved');
          setResponse(false);
          setTotal(res.total);
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }, 500);
  }, [searchQuery, page]);

  const handleSearchbarSubmit = newSearchQuery => {
    if (searchQuery !== newSearchQuery) {
      setImages([]);
      setStatus('pending');
      setPage(1);
      setSearchQuery(newSearchQuery);
    }
  };

  const loadMore = () => {
    setPage(state => state + 1);
  };
  return (
    <div>
      <Searchbar onSubmit={handleSearchbarSubmit} />
      <ImageGallery status={status} error={error} images={images} />
      {response && <Loader />}
      {status === 'resolved' && total > images.length > 0 && (
        <Button onClickButton={loadMore} />
      )}
    </div>
  );
}

export default App;
