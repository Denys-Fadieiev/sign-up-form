import { Component } from "react";
import styles from "./SignUpForm.module.scss";
import Header from "./Header";
import Form from "./Form";

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
      fulname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      isVisible: false,
      isAgree: false,
    };
	}

	handleFulnameChange = ({ target: { value } }) =>
		this.setState({ fulname: value });

	handleEmailChange = ({ target: { value } }) => this.setState({ email: value });

	handlePasswordChange = ({ target: { value } }) =>
		this.setState({ password: value });

	handlePasswordConfirmChange = ({ target: { value } }) =>
		this.setState({ passwordConfirm: value });

	handleAgreeChange = () => this.setState({ isAgree: !this.state.isAgree });

	handleIsVisibleChange = () => this.setState({ isVisible: !this.state.isVisible });
	
	render() {
		const { fulname, email, password, passwordConfirm, isVisible, isAgree } = this.state;

		return (
			<article className={styles.signUpForm}>
				<Header />
				<Form
					fulname={fulname}
					email={email}
					password={password}
					passwordConfirm={passwordConfirm}
					isVisible={isVisible}
					isAgree={isAgree}
					handleFulnameChange={this.handleFulnameChange}
					handleEmailChange={this.handleEmailChange}
					handlePasswordChange={this.handlePasswordChange}
					handlePasswordConfirmChange={this.handlePasswordConfirmChange}
					handleAgreeChange={this.handleAgreeChange}
					handleIsVisibleChange={this.handleIsVisibleChange}
				/>
			</article>
		);
	};
};

export default SignUpForm;
