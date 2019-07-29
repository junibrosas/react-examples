import React from 'react';
import { connect } from 'react-redux';

function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(TodoList);
