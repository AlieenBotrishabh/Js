import { useState } from 'react';
import './index.css';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (pass) => {
    if (!pass) {
      setStrength('');
      return;
    }

    // Password strength conditions
    if (pass.length < 6) {
      setStrength('Weak');
    } else if (pass.match(/[a-z]/) && pass.match(/[A-Z]/) && pass.match(/[0-9]/)) {
      setStrength('Strong');
    } else {
      setStrength('Medium');
    }
  };

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkPasswordStrength(e.target.value);
          }}
        />
        <button type="submit">⇒</button>
        {password && <p id="message">Password is <span>{strength}</span></p>}
      </div>
    </div>
  );
}

export default App;
