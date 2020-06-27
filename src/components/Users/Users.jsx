import React from 'react'
import User from './User/User'

function Users(props) {
	console.log(props)
	return props.users.map((user) => <User fullName={user.fullName} />)
}
export default Users
