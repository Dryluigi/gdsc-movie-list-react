import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Search.scss';

import routes from '../../constants/apiRoutes';
import Dropdown, { DropdownItemProps } from './Dropdown/Dropdown';

const Search = () => {
  const [search, setSearch] = useState('');
  const [dropdownItems, setDropdownItems] = useState<DropdownItemProps[]>([]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {

    const apiCallTimeout = setTimeout(() => {
      setDropdownItems(() => []);
      if (search.trim().length > 0) {
        const BASE_API_URL = process.env.REACT_APP_MOVIE_API_URL ?? '';
        const API_KEY = process.env.REACT_APP_MOVIE_API_KEY ?? '';
        const BASE_CONTENT_URL = process.env.REACT_APP_BASE_CONTENT_URL ?? '';
        const { searchMovie } = routes;

        axios.get(`${BASE_API_URL}${searchMovie}?api_key=${API_KEY}&query=${search}`)
          .then(data => {
            const fetchedMovies: any[] = data.data.results;
            setDropdownItems(() => fetchedMovies.map(m => {
              const dropdownItemObject: DropdownItemProps = {
                title: m.original_title,
                image: `${BASE_CONTENT_URL}${m.poster_path}`,
                year: +m.release_date.split('-')[0],
              }

              return dropdownItemObject;
            }));
          })
          .catch(error => console.log(error));


      }
    }, 400);

    return () => {
      clearTimeout(apiCallTimeout);
    }
  }, [search]);

  return (
    <form action="#" className="search-form">
      <div className="search-form__input">
        <input type="text" name="search" id="search" value={search} onChange={changeHandler} />
        {dropdownItems.length > 0 &&
          <Dropdown>
            {dropdownItems.map(item => (
              <Dropdown.Item title={item.title} image={item.image} year={item.year} />
            ))}
          </Dropdown>
        }
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;