import React from 'react';
import {useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {getBands} from '../../middleware/thunk';

import { StyledInput } from './Search.styles'

const Search = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(getBands(e.target.value));
  };

  // eslint-disable-next-line
  const debouncedResults = useMemo(() => debounce(handleChange, 500), []);

  useEffect(() => debouncedResults.cancel());

  return (
    <StyledInput
      className="search"
      placeholder="Search Album"
      onChange={debouncedResults}
    />
  );
};

export default Search;
