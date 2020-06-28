import React from 'react'
import User from './User/User'

function Users(props) {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				followed: false,
				fullName: 'Machtiev Djamal Labazanovich',
				status: 'very welll',
				location: { city: 'Moscow', country: 'Russia' },
				imageUrl:
					'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
			},
			{
				id: 2,
				followed: false,
				fullName: 'Magomedov Magomed Ruslanovich',
				status: 'all is good',
				location: { city: 'Makhachkala', country: 'Russia' },
				imageUrl:
					'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
			},
			{
				id: 3,
				followed: true,
				fullName: 'Dimych Ivan Sergeevich',
				status: 'all is good',
				location: { city: 'Voronej', country: 'Russia' },
				imageUrl:
					'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg',
			},
		])
	}
	console.log(props.users)
	return props.users.map((user) => (
		<div>
			<User key={user.id} toggleFollow={props.toggleFollow} userData={user} />
		</div>
	))
}
export default Users
