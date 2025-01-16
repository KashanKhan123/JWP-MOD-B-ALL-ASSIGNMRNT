import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from './Signup.module.css';

const Signup = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && email && password) {
      swal({
        icon: 'success',
        title: 'Sign Up Successful',
        text: `Welcome, ${username}! Your account has been created.`,
      });
      switchToLogin();
    } else {
      swal({
        icon: 'error',
        title: 'Sign Up Failed',
        text: 'Please fill out all fields.',
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label>Username:</label>
          <input
            className={styles.inputField}
            placeholder="Enter your name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br /><br />
          <label>Email:</label>
          <input
            className={styles.inputField}
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />
          <label>Password:</label>
          <input
            className={styles.inputField}
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />
          <button className={styles.btn} type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <span className="btn btn-link" onClick={switchToLogin}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;