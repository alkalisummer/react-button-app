import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  // counter state 의 초기값이 0인지 확인
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />);
  //마이너스 버튼에 '-' 텍스트가 올바르게 있는지 확인
  const buttonElement = screen.getByTestId('minus-button');
  expect(buttonElement).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  //마이너스 버튼에 '+' 텍스트가 올바르게 있는지 확인
  const buttonElement = screen.getByTestId('plus-button');
  expect(buttonElement).toHaveTextContent('+');
});

test('When the + button is pressed, the counter changes to + 1', () => {
  render(<App />);
  // + 버튼을 클릭하는 이벤트 발생
  const buttonElement = screen.getByTestId('plus-button');
  fireEvent.click(buttonElement);
  // + 버튼을 클릭할 시 counter state가 1로 바뀌었는지 확인
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('1');
});

test('When the - button is pressed, the counter changes to - 1', () => {
  render(<App />);
  // - 버튼을 클릭하는 이벤트 발생
  const buttonElement = screen.getByTestId('minus-button');
  fireEvent.click(buttonElement);
  // - 버튼을 클릭할 시 counter state가 -1로 바뀌었는지 확인
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('-1');
});
