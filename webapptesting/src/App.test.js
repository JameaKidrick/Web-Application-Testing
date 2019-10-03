import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import Dashboard, { addStrikes, addBalls, Foul, Hit } from './components/Dashboard'

test('renders without crashing', () => {
  render(<App />);
});

test('addStrikes adds 1 point to the current strike amount', () => {
  let actual;
  let expected;
  actual = addStrikes(0);
  expected = 1;
  expect(actual).toBe(expected)
})

test('addStrikes resets to 0 when strikes = 3', () => {
  expect(addStrikes(2)).toBe(0);
})

test('addBalls adds 1 point to the current ball amount', () => {
  expect(addBalls(0)).toBe(1);
})

test('addBalls resets to 0 when balls = 4', () => {
  expect(addBalls(3)).toBe(0);
})

test('Foul adds 1 point to the strikes when strike amount = 0', () => {
  expect(Foul(0)).toBe(1);
})

test('Foul adds 1 point to the strikes when strike amount = 1', () => {
  expect(Foul(1)).toBe(2);
})

test('Foul adds 0 points to the strikes when strike amount = 2', () => {
  expect(Foul(2)).toBe(2);
})

test('Hit resets balls and strikes to 0', () => {
  expect(Hit(2, 3)).toBe(0, 0)
})

// test('Hit resets balls and strikes to 0', () => {
//   expect(Hit(2, 3)).toBe(0, 0)
// })

// test('Hit resets balls and strikes to 0', () => {
//   expect(Hit(2, 3)).toBe(0, 0)
// })