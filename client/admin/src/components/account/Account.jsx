import { useState, useEffect } from 'react';
import styles from './Account.module.css';
import Body from '../Body';

export default function Account() {
    
  const initialValues = {
    name: "Niram Sharma",
    email: "niram@gmail.com",
    phone: "9812345678",
    password: "password",
  };

  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [phone, setPhone] = useState(initialValues.phone);
  const [password, setPassword] = useState(initialValues.password);
  const [showPassword, setShowPassword] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const changed =
      name !== initialValues.name ||
      email !== initialValues.email ||
      phone !== initialValues.phone ||
      password !== initialValues.password;

    setHasChanges(changed);
  }, [name, email, phone, password]);

  return (
    <Body>
      <div className={styles.accountsWrap}>
        <div className={styles.accountBox}>
          <div className={styles.profileCont}>
            <img
              src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
              alt=""
              className={styles.profileImg}
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.profileName}
            />
          </div>
          <div className={styles.profileDataCont}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.profileData}
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.profileData}
            />
            <div className={styles.passwordCont}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              ></i>
            </div>
          </div>
        </div>
        <div className={styles.buttonsCont}>
          <button>Logout</button>
          {hasChanges && <button>Save Changes</button>}
        </div>
      </div>
    </Body>
  );
}
