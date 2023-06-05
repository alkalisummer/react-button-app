import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Button Counter Tests', () => {
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

  test('on/off button has blue color', () => {
    render(<App />);
    // on/off-button의 background컬러가 'blue'인지 확인
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('prevent the -, + button from being pressed when the on/off button is clicked', () => {
    render(<App />);
    // on/off-button 클릭하는 이벤트 발생
    const onOffButtonElement = screen.getByTestId('on/off-button');
    fireEvent.click(onOffButtonElement);

    // on/off-button을 클릭시 -, + 버튼이 비활성화 되는지 확인
    const plusButtonElement = screen.getByTestId('plus-button');
    const minusButtonElement = screen.getByTestId('minus-button');
    expect(plusButtonElement).toBeDisabled();
    expect(minusButtonElement).toBeDisabled();
  });
});
