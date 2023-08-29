import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  // Setting the state
  const [count, setCount] = useState(0);

  // Setting Buttons
  const increaseButton = () => setCount(count + 1);
  const decreaseButton = () => setCount(count - 1);
  const zeroButton = () => setCount(0)
  
  return (
    <div className="App">
      <Button 
        handleClick={increaseButton}
        text="Increase"
        className="increase"
      />
      <Button 
        handleClick={decreaseButton}
        text="Decrease"
        className="decrease"
      />
      <h1 className='count'>{count}</h1>
      <Button 
        text="Reset"
        handleClick={zeroButton}
        className="reset"
      />
    </div>
  );
}

export default App;
