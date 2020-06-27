import React from 'react'
import styles from './Messages.module.css'
import ChatWith from './ChatWith/ChatWith'
import Message from './Message/Message'

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

	return (
		<div className={styles.messages_container}>
			<div className={styles.chats}>{chatWithElements}</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<div>
					<textarea
						onChange={(e) => props.changeMessageBody(e.target.value)}
						value={props.messagesPage.newMessageBody}
					/>
					<button onClick={props.sendMessage}>Send message</button>
				</div>
			</div>
		</div>
	)
}

export default Messages
