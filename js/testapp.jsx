import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return React.createElement(
    'div',
    { id: 'first-component' },
    React.createElement(MyTitle, { title: 'Test 1', color: 'lightsteelblue' }),
    React.createElement(MyTitle, { title: 'Test 2', color: 'tomato' }),
    React.createElement(MyTitle, { title: 'Test 3', color: 'lightslategrey' })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
