import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import styles from './Form.module.scss';

const Form = (props) => {
  const { 
    fulname,
    email,
    password,
    passwordConfirm,
    isVisible,
    isAgree,
    handleFulnameChange, 
    handleEmailChange, 
    handlePasswordChange,
    handlePasswordConfirmChange,
    handleAgreeChange,
    handleIsVisibleChange,
  } = props;

  return (
    <form action="#" className={styles.form}>
      <label className={styles.label}>
        <span className={styles.span}>
          FULLNAME
        </span>
        <input 
          className={styles.input}
          type="text" 
          name='fullname'
          placeholder='Enter your fullname'
          autoFocus
          value={fulname}
          onChange={handleFulnameChange}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.span}>
          EMAIL ADDRESS
        </span>
        <input 
          className={styles.input}
          type="email" 
          name='email'
          placeholder='Enter your email'
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.span}>
          PASSWORD
        </span>
        <input 
          className={styles.input}
          type={!isVisible ? "password" : "text"} 
          name='password'
          placeholder='Enter your password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button 
          className={styles.btnEye}
          type="button"
          onClick={handleIsVisibleChange}
        >
          
          {!isVisible ? <BsEye/> : <BsEyeSlash/>}
        </button>
      </label>
      <label className={styles.label}>
        <span className={styles.span}>
          PASSWORD CONFIRMATION
        </span>
        <input 
          className={styles.input}
          type={!isVisible ? "password" : "text"} 
          name='password confirmation'
          placeholder='Confirm the your password'
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </label>
      <label className={styles.labelIsAgree}>
        <input 
          className={styles.inputIsAgree}
          type="checkbox"
          name='isAgree'
          checked={isAgree}
          onChange={handleAgreeChange}
        />
        <span className={styles.spanIsAgree}>
          I Agree All Statements In Terms Of Service
        </span>
      </label>
      <button className={styles.btn}
        type='submit'
        onClick={() => {}}
      >
        Sign Up
      </button>
      <label className={styles.label}>
        <span className={styles.spanIsAgree}>
          I`m already a member!
          {/* //!Как сделать ссылку в реакте? */}
          <span className={styles.span}> Sign in</span>
        </span>
      </label>
    </form>
  );
};

export default Form;
