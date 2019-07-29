import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './redux/store';
import TodoList from './components/TodoList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
