import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)

function LoginForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name='login'
					type='text'
					placeholder='login'
					component={Input}
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<Field
					name='password'
					type='password'
					placeholder='password'
					component={Input}
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<Field
					name='remember'
					type='checkbox'
					component={Input}
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<button>submit</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

function Login(props) {
	const submit = (values) => {
		console.log(values)
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={submit} />
		</div>
	)
}

export default Login
