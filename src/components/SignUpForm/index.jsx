import { Component } from "react";
import styles from "./SignUpForm.module.scss";
import Header from "./Header";
import Form from "./Form";

const INITIAL_VALUES = {
	fulname: '',
	email: '',
	password: '',
	passwordConfirm: '',
}

const LOGIN_FORM_REX_EXP = {
	fulname: /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
	email: /^.+@.+$/,
	password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
};
class SignUpForm extends Component {
	constructor(props) {
		super(props);


		this.state = {
      fulname: INITIAL_VALUES.fulname,
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
      passwordConfirm: INITIAL_VALUES.passwordConfirm,
			isFullnameValid: false,
			isEmailValid: false,
			isPasswordValid: false,
      isVisible: false,
      isAgree: false,
    };
	}

	handleFulnameChange = ({ target: { value } }) =>
		this.setState({ 
			fulname: value,
			isFullnameValid: LOGIN_FORM_REX_EXP.fulname.test(value),
		});

	handleEmailChange = ({ target: { value } }) => 
		this.setState({ 
			email: value,
			isEmailValid: LOGIN_FORM_REX_EXP.email.test(value),
		});

	handlePasswordChange = ({ target: { value } }) =>
		this.setState({ 
			password: value,
			isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value),
		});

	handlePasswordConfirmChange = ({ target: { value } }) =>
		this.setState({ passwordConfirm: value });

	handleAgreeChange = () => this.setState({ isAgree: !this.state.isAgree });

	handleIsVisibleChange = () => this.setState({ isVisible: !this.state.isVisible });

	handleSubmit = e => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };
	
	render() {
		const { 
			fulname, 
			email, 
			password, 
			passwordConfirm,
			isFullnameValid,
			isEmailValid, 
			isPasswordValid, 
			isVisible, 
			isAgree 
		} = this.state;

		return (
			<article className={styles.signUpForm}>
				<Header />
				<Form
					fulname={fulname}
					email={email}
					password={password}
					passwordConfirm={passwordConfirm}
					isFullnameValid={isFullnameValid}
					isEmailValid={isEmailValid}
					isPasswordValid={isPasswordValid}
					isVisible={isVisible}
					isAgree={isAgree}
					handleFulnameChange={this.handleFulnameChange}
					handleEmailChange={this.handleEmailChange}
					handlePasswordChange={this.handlePasswordChange}
					handlePasswordConfirmChange={this.handlePasswordConfirmChange}
					handleAgreeChange={this.handleAgreeChange}
					handleIsVisibleChange={this.handleIsVisibleChange}
					handleSubmit={this.handleSubmit}
				/>
			</article>
		);
	};
};

export default SignUpForm;
