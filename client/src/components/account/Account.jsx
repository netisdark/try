import { useState } from 'react';
import styles from './Account.module.css';

export default function Account() {
  const [isLoginMode, setIsLoginMode] = useState(false);

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

        <input type="text" placeholder="Enter your email" />
        
        {!isLoginMode && (
          <input type="text" placeholder="Enter your name" />
        )}
        
        <input type="text" placeholder={passwordPlaceholder} />
        
        <button className={styles.createAccBtn}>{buttonText}</button>
        
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
