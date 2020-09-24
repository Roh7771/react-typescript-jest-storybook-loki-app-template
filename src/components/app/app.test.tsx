import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

test('App should render correct', () => {
  const tree = renderer.create(<App title="Hello World!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
