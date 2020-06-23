import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{
					id: 1,
					message: 'GTR 1',
					imageUrl:
						'https://i.gaw.to/content/photos/34/21/342132_2018_Nissan_GT-R.jpg',
				},
				{
					id: 2,
					message: 'GTR 2',
					imageUrl:
						'https://im.kommersant.ru/Issues.photo/AUTO_News/2019/04/18/KMO_152985_04194_1_t218_181856.jpg',
				},
				{
					id: 3,
					message: 'GTR 3',
					imageUrl:
						'https://i.pinimg.com/736x/84/e0/18/84e01848b7be9785176197c4ceb5227a.jpg',
				},
				{
					id: 4,
					message: 'GTR 4',
					imageUrl:
						'https://im.kommersant.ru/Issues.photo/AUTO_News/2019/04/18/KMO_152985_04194_1_t218_181856.jpg',
				},
			],
		},
		messagesPage: {
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
		},
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	_callSubscriber() {},
	dispatch(action) {
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)

		this._callSubscriber(this._state)

		// if (action.type === ADD_POST) {
		// 	let newPost = {
		// 		id: this._state.profilePage.posts.length,
		// 		message: action.data.message,
		// 		imageUrl: action.data.imageUrl,
		// 	}

		// 	this._state.profilePage.posts.push(newPost)
		// 	this._callSubscriber(this._state)
		// } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		// 	this._state.messagesPage.newMessageBody = action.body
		// 	this._callSubscriber(this._state)
		// } else if (action.type === SEND_MESSAGE) {
		// 	let { chatId } = action
		// 	let newMessage = {
		// 		from: 'Я',
		// 		to: this._state.messagesPage.chats[chatId - 1].name,
		// 		date: new Date().toLocaleString(),
		// 		message: this._state.messagesPage.newMessageBody,
		// 	}
		// 	this._state.messagesPage.chats[chatId - 1].messages.push(newMessage)
		// 	this._state.messagesPage.newMessageBody = ''
		// 	this._callSubscriber(this._state)
		// }
	},
}

export default store
window.store = store
