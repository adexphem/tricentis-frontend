import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { listShuffling } from '../../utils/listShuffling';

import {initialArray, timeInterval} from './Card.constants';
import {Box, Container} from './Card.styles'

const Card = () => {
  const [initialData, setData] = useState(initialArray);
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    const interval = setInterval(() => {
        setData(listShuffling(initialData, albums));
    }, timeInterval);

    return () => clearInterval(interval);
  });

  return (
    <Container>
        {initialData.map((item, i) => 
            <Box className="listItem" key={item + i}>
                {item}
            </Box>
        )}
    </Container>
  );
};

export default Card;