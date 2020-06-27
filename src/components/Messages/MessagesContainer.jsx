import Messages from './Messages.jsx'
import {
	updateNewMessageBodyActionCreator,
	sendMessageActionCreator,
} from '../../redux/reducers/messages-reducer'

import { connect } from 'react-redux'

function mapStateToProps(state) {
	return { messagesPage: state.messagesPage }
}
function mapDispatchToPtops(dispatch) {
	return {
		sendMessage: (e) => {
			let chatId = window.location.pathname.split('/').pop()
			dispatch(sendMessageActionCreator(chatId))
		},
		changeMessageBody: (body) => {
			dispatch(updateNewMessageBodyActionCreator(body))
		},
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToPtops)(Messages)

export default MessagesContainer
