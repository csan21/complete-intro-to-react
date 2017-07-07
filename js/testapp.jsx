import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{color: props.color}}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="first-component">
      <MyTitle title="Test 1" color="lightsteelblue" />
      <MyTitle title="Test 2" color="tomato" />
      <MyTitle title="Test 3" color="lightslategrey" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'))
