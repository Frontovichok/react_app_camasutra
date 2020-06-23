import React from 'react'
import styles from './Messages.module.css'
import ChatWith from './ChatWith/ChatWith'
import Message from './Message/Message'
import {
	updateNewMessageBodyActionCreator,
	sendMessageActionCreator,
} from '../../redux/reducers/messages-reducer'

function Messages(props) {
	let messageTextareaRef = React.createRef()

	let chatWithElements = props.state.chats.map((chat) => (
		<ChatWith id={chat.id} name={chat.name} avatarUrl={chat.avatarUrl} />
	))
	let messagesElements = props.state.chats[0].messages.map((message) => (
		<Message message={message.message} />
	))

	let handleClick = (e) => {
		let chatId = window.location.pathname.split('/').pop()
		props.dispatch(sendMessageActionCreator(chatId))
	}
	let handleChange = (e) => {
		let body = e.target.value
		props.dispatch(updateNewMessageBodyActionCreator(body))
	}

	return (
		<div className={styles.messages_container}>
			<div className={styles.chats}>{chatWithElements}</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<div>
					<textarea
						onChange={handleChange}
						ref={messageTextareaRef}
						value={props.state.newMessageBody}
					/>
					<button onClick={handleClick}>Send message</button>
				</div>
			</div>
		</div>
	)
}

export default Messages
