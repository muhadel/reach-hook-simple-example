import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { getTodos } from './redux/todo';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const todo = useSelector(({ todo }) => todo);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
    if (todo) setIsLoading(false);
  }, [todo]);

  return (
    <div className="App">
      <header className="App-header">
        Todos
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <div>
            {todo.map((t) => (
              <p>{t.title}</p>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
