import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  rating: number | string;
}

const Stars = ({ rating }: Props) => {
  if (rating === 'half') {
    return <FontAwesomeIcon icon={faStarHalfStroke} color='gold' />;
  }

  return <FontAwesomeIcon icon={faStar} color='gold' />;
};

export default Stars;
