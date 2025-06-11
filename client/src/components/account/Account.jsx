import { useState } from 'react';
import styles from './Account.module.css';

export default function Account() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchLink = isLoginMode
    ? import.meta.env.VITE_LOGIN_ROUTES
    : import.meta.env.VITE_REGISTER_ROUTES;

  const submitCredentials = async () => {

    try {
      const response = await fetch(fetchLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, password })
      });

      const result = await response.json();

      if (response.ok) {
        setEmail('');
        setName('');
        setPassword('');
        location.href="/dashboard";
      } else {
        alert(result.message || 'Something went wrong.');
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };


  const toggleMode = () => {
    setIsLoginMode(prev => !prev);
  };

  const buttonText = isLoginMode ? 'Login' : 'Create Account';
  const passwordPlaceholder = isLoginMode ? 'Enter your password' : 'Set a password';
  const togglePrompt = isLoginMode
    ? "Don't have an account?"
    : 'Already have an account?';
  const toggleAction = isLoginMode ? ' Create now' : ' Login now';

  return (
    <div className={styles.accountCont}>
      <form>
          
      <p className={styles.formTitle}>{isLoginMode ? 'Login' : 'Create Account'}</p>

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
        
        {!isLoginMode && (
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        )}
        
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={passwordPlaceholder} />
        
        <button type='button' onClick={submitCredentials} className={styles.createAccBtn}>{buttonText}</button>
        
        <div className={styles.alreadyText}>
          {togglePrompt}
          <span
            className={styles.loginText}
            onClick={toggleMode}
            style={{ cursor: 'pointer' }}
          >
            &nbsp;{toggleAction}
          </span>
        </div>
      </form>
    </div>
  );
}
