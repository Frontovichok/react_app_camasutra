import React from 'react'
import styles from './Messages.module.css'
import ChatWith from './ChatWith/ChatWith'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'

function Messages(props) {
	let chatWithElements = props.messagesPage.chats.map((chat) => (
		<ChatWith
			key={chat.id}
			id={chat.id}
			name={chat.name}
			avatarUrl={chat.avatarUrl}
		/>
	))
	let messagesElements = props.messagesPage.chats[0].messages.map(
		(message, i) => <Message key={i} message={message.message} />
	)
	let { chatId } = props.match.params

	const submit = (values) => {
		props.sendMessage(chatId, values.newMessageBody)
	}

	return (
		<div className={styles.messages_container}>
			<div className={styles.chats}>{chatWithElements}</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<AddMessageForm onSubmit={submit} />
			</div>
		</div>
	)
}

export default Messages
