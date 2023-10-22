import React from 'react';
import { useDispatch } from 'react-redux';
import { filterEmails } from '../redux/emailSlice';
import './styles.css';

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(filterEmails(filter));
  };

  return (
    <div className="filter__options">
      <button onClick={() => handleFilterChange('all')}>All Emails</button>
      <button onClick={() => handleFilterChange('favorites')}>Favorites</button>
      <button onClick={() => handleFilterChange('read')} style={{backgroundColor:"aqua"}}>Read</button>
      <button onClick={() => handleFilterChange('unread')}>Unread</button>
    </div>
  );
};

export default FilterOptions;
