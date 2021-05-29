/* eslint-disable react/no-typos */
import React from 'react';
import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';

const WishList = ({ wishes }) => (
  <ul className="wish-list">
    { wishes.map(({ text, done }, i) => (
      <li
        key={text}
        className={classNames(
          'wish-list__item',
          { 'wish-list__item--done': done },
        )}
      >
        <label htmlFor={`wish${i}`}>
          <input id={`wish${i}`} type="checkbox" defaultChecked={done} />
          {text}
        </label>
      </li>
    )) }
  </ul>
);

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    done: Boolean,
    text: string,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
