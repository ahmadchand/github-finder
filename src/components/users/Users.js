import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItems'
// import Spinner from '../layout/spinner.gif'

const Users = ({ users, loading }) => {

    // users = [{
    //     login: "mojombo",
    //     id: 1,
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    // }, {
    //     login: "defunkt",
    //     id: 2,
    //     avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //     html_url: "https://github.com/defunkt",
    // }, {
    //     login: "pjhyett",
    //     id: 3,
    //     avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //     html_url: "https://github.com/pjhyett",
    // },
    // {
    //     login: "wycats",
    //     id: 4,
    //     avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
    //     html_url: "https://github.com/wycats",
    // }]

    // render() {
    // if (loading) {
    //     <Spinner />
    // } else {
    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
    // }
    // }

}

Users.prototype = {
    users: PropTypes.array.isRequired,
    // loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
