import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList/WishList';

const initialWishes = [
  { done: true, text: 'Comprar Pan' },
  { done: false, text: 'Aprobar el curso' },
  { done: false, text: 'Dormir bien' },
  { done: true, text: 'Tomar agua' },
];

const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist app</h1>
      <WishInput
        onNewWish={(wish) => {
          setWishes([wish, ...wishes]);
        }}
      />
      <WishList wishes={wishes} />
      <button className="wish-clear" type="button">
        Archive done
      </button>
    </div>
  );
};

export default App;
