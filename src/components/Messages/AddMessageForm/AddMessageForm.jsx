import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../Common/FormsControls/FormsControls'
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators'

const maxLengt50 = maxLengthCreator(50)

function AddMessageForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					name='newMessageBody'
					component={Textarea}
					validate={[required, maxLengt50]}
					placeholder='enter message'
				/>
			</div>
			<button>send message</button>
		</form>
	)
}

export default reduxForm({ form: 'addMessage' })(AddMessageForm)
