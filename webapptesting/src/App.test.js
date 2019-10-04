import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import Dashboard, { addStrikes, addBalls, Foul, Hit } from './components/Dashboard'

// APP ERROR TEST
test('renders without crashing', () => {
  render(<App />);
});

// ADD STRIKE FUNCTION ERROR TEST
test('if the number of strikes is 3, it will reset to 0', () => {
  let actual;
  let expected;
  actual = addStrikes(3);
  expected = 0;
  expect(actual).toBe(expected)
})

test('if the number of strikes is below 3, it will add 1', () => {
  expect(addStrikes(0)).toBe(1);
})

// ADD BALLS FUNCTION ERROR TEST
test('if the number of balls is 4, it will reset to 0', () => {
  expect(addBalls(3)).toBe(0);
})

test('if the number of balls is below 3, it will add 1 ', () => {
  expect(addBalls(0)).toBe(1);
})

// FOUL FUNCTION ERROR TEST
test('Foul adds 1 point to the strikes when strike amount = 0', () => {
  expect(Foul(0)).toBe(1);
})

test('Foul adds 1 point to the strikes when strike amount = 1', () => {
  expect(Foul(1)).toBe(2);
})

test('Foul adds 0 points to the strikes when strike amount = 2', () => {
  expect(Foul(2)).toBe(2);
})

// HIT FUNCTION ERROR TEST
test('Hit resets strikes and balls to 0', () => {
  expect(Hit(2)).toBe(0)
})