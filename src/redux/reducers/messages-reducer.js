const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
	chats: [
		{
			id: 1,
			name: 'Dimych',
			avatarUrl:
				'https://vokrug.tv/pic/news/f/d/5/c/fd5cf5152388482e372543bcd230e2df.jpg',
			messages: [
				{
					from: 'Я',
					to: 'Dimych',
					date: '15:15 19.06.2020',
					message: 'Привет',
				},
				{
					from: 'Dimych',
					to: 'Я',
					date: '15:16 19.06.2020',
					message: 'Привет, как ты?',
				},
				{
					from: 'Я',
					to: 'Dimych',
					date: '15:17 19.06.2020',
					message: 'Норм, прогу пишу, сам как?',
				},
			],
		},
		{
			id: 2,
			name: 'Andrey',
			avatarUrl:
				'https://24smi.org/public/media/celebrity/2017/04/14/rKb25WzeF9V3_andrej-merzlikin.jpg',
			messages: [],
		},
		{
			id: 3,
			name: 'Lera',
			avatarUrl:
				'https://vokrug.tv/pic/news/8/0/8/b/808b9c0aa7e7f7555fa27dcc7f76f9c7.jpg',
			messages: [],
		},
		{
			id: 4,
			name: 'Dasha',
			avatarUrl:
				'https://cs6.pikabu.ru/post_img/big/2015/01/12/5/1421043416_1912902171.jpg',
			messages: [],
		},
		{
			id: 5,
			name: 'Sasha',
			avatarUrl:
				'https://s.mediasole.ru/cache/content/data/images/949/949406/grej_000.jpg',
			messages: [],
		},
		{
			id: 6,
			name: 'Valera',
			avatarUrl:
				'https://m-files.cdnvideo.ru/lpfile/f/8/b/f8bf35539d752ca79d54f06a2cf604f2/-/scale/x1/-/crop/0x0x1280x720/-/resize/800/-/quality/95/file.jpg',
			messages: [],
		},
	],
	newMessageBody: '',
}

function messagesReducer(state = initialState, action) {
	switch (action.type) {
		case SEND_MESSAGE:
			let { chatId } = action
			let newMessage = {
				from: 'Я',
				to: state.chats[chatId - 1].name,
				date: new Date().toLocaleString(),
				message: state.newMessageBody,
			}
			state.chats[chatId - 1].messages.push(newMessage)
			state.newMessageBody = ''
			return state
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state
		default:
			return state
	}
}

export const updateNewMessageBodyActionCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body,
	}
}

export const sendMessageActionCreator = (chatId) => {
	return {
		type: SEND_MESSAGE,
		chatId: chatId,
	}
}

export default messagesReducer
