import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles.css';

const App = () => {
  const [numbers, setNumbers] = useState({
    number1: '',
    number2: ''
  });
  const [result, setResult] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onInputChange = event => {
    const { name, value } = event.target;
    setNumbers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOperation = operation => {
    let { number1, number2 } = numbers;
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);

    let result;
    if (operation === 'add') {
      result = number1 + number2;
    } else if (operation === 'subtract') {
      result = number1 - number2;
    }

    if (isNaN(result)) {
      setErrorMsg('Please enter valid numbers.');
    } else {
      setErrorMsg('');
      setResult(result);
    }
  };
  
  return (
    <div>
      <div className='input-section'>
        {errorMsg && (
          <p className='error-msg'>{errorMsg}</p>
        )}
        <label>First Number</label>
        <input
          type='text'
          name='number1'
          placeholder='Enter a number'
          value={numbers.number1}
          onChange={onInputChange}
        />
      </div>
      <div className='input-section'>
        <label>Second Number</label>
        <input
          type='text'
          name='number2'
          placeholder='Enter a number'
          value={numbers.number2}
          onChange={onInputChange}
        />
      </div>
      <div className='result-section'>
        Result: <span className='result'>{result}</span>
      </div>
      <button type='button' className='btn' onClick={() => handleOperation('add')}>
        Add
      </button>
      <button type='button' className='btn' onClick={() => handleOperation('subtract')}>
        Subtract
      </button>
    </div>
  );
}

export default hot(App);
