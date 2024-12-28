import React, { useState } from 'react';
import './App.css'; // Add your CSS here or use styled-components

const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <p>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span className="link" onClick={toggleForm}>Login here</span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span className="link" onClick={toggleForm}>Sign up here</span>
            </>
          )}
        </p>

        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
};

const SignUpForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="Enter your password" required />
      </div>
      <div className="checkbox">
        <input type="checkbox" id="updates" />
        <label htmlFor="updates">
          By signing up, you agree to receive updates and special offers.
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="login-email">Email:</label>
        <input id="login-email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password:</label>
        <input id="login-password" type="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
