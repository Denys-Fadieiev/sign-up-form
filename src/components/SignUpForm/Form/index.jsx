import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import classNames from 'classnames';
import styles from './Form.module.scss';

const Form = (props) => {
  const { 
    fulname,
    email,
    password,
    passwordConfirm,
    isFullnameValid,
    isEmailValid,
    isPasswordValid,
    isVisible,
    isAgree,
    handleFulnameChange, 
    handleEmailChange, 
    handlePasswordChange,
    handlePasswordConfirmChange,
    handleAgreeChange,
    handleIsVisibleChange,
    handleSubmit,
  } = props;

  const isFullnameValidClassname = classNames(styles.input, {
    [styles.inputValid]: isFullnameValid,
    [styles.inputInvalid]: !isFullnameValid,
  });

  const emailClassname = classNames(styles.input, {
    [styles.inputValid]: isEmailValid,
    [styles.inputInvalid]: !isEmailValid,
  });

  const passwordClassname = classNames(styles.input, {
    [styles.inputValid]: isPasswordValid,
    [styles.inputInvalid]: !isPasswordValid,
  });

  const passwordConfirmChangeClassname = classNames(styles.input, {
    [styles.inputValid]: isPasswordValid,
    [styles.inputInvalid]: (passwordConfirm === '') || (passwordConfirm !== password) || !isPasswordValid,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.span}>
          FULLNAME
        </span>
        <input 
          className={isFullnameValidClassname}
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
          className={emailClassname}
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
          className={passwordClassname}
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
          className={passwordConfirmChangeClassname}
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
