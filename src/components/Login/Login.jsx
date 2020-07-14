import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { login } from '../../redux/reducers/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styles from './../Common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)

function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name='email'
					type='text'
					placeholder='email'
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field
					name='password'
					type='password'
					placeholder='password'
					component={Input}
					validate={[required, maxLength30]}
				/>
			</div>
			<div>
				<Field name='rememberMe' type='checkbox' component={Input} />
			</div>
			{props.error && <div className={styles.summaryError}>ERROR</div>}
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
	const submit = (values) => {
		const { email, password, rememberMe } = values
		props.login(email, password, rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to='profile' />
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={submit} />
		</div>
	)
}

function mapStateToProps(state) {
	return { isAuth: state.auth.isAuth }
}
function mapDispatchToProps(dispatch) {
	return {
		login: (email, password, rememberMe) =>
			dispatch(login(email, password, rememberMe)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
