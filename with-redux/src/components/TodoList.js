import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoList() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch({ type: "CREATE_ITEM", payload: 'React-redux Hooks API is out!' })
  };

  return <>
    <ul>
      {items.map((item) => <li key={item.id}>{item.description}</li>)}
    </ul>
    <button onClick={handleAddItem}>Add Item</button>
  </>
}

export default TodoList;
