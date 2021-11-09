import React from 'react';

import { DropdownItemProps } from '../Dropdown';

const Item: React.FC<DropdownItemProps> = ({ title, image, year }) => {
  return (
    <li className="search-form__item">
      <img src={image} alt="dropdown_image" />
      <div className="search-form__item-info">
        <p className="search-form__item-title">{title}</p>
        <p>Tahun: {year}</p>
      </div>
    </li>
  );
};

export default Item;
