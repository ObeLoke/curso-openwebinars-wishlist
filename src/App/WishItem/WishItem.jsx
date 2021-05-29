import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const WishItem = ({ done, text, id, onDoneChange }) => (
  <li
    key={text}
    className={classNames('wish-list__item', { 'wish-list__item--done': done })}
  >
    <label htmlFor={id}>
      <input
        id={id}
        checked={done}
        type="checkbox"
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      {text}
    </label>
  </li>
);

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
