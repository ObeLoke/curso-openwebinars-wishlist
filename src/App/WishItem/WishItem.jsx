import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const WishItem = ({ done, text, id, onDoneChange }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((a) => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
      key={text}
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warning': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <label htmlFor={id}>
        <input
          id={id}
          checked={!!done}
          type="checkbox"
          onChange={(e) => onDoneChange(e.target.checked)}
        />
        {text}
      </label>
    </li>
  );
};

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};
export default WishItem;
