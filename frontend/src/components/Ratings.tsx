import React, { useState } from 'react';

import Stars from './Stars';

interface Props {
  rating?: number;
}

const Ratings = ({ rating }: Props) => {
  const [isRatingMid] = useState(Number(rating) % 1 !== 0);
  console.log(isRatingMid);
  const ratings = [];

  for (let i = 1; i <= Math.floor(rating!); i++) {
    ratings.push(i);
  }

  if (isRatingMid) {
    ratings.push('half');
  }

  return (
    <div>
      {ratings.map((rating) => (
        <Stars rating={rating} />
      ))}
    </div>
  );
};

export default Ratings;
