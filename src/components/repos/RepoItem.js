import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({ repo }) => {
    return (
        <div className='card'>
            <h4 className='repos-link'><a href={repo.html_url}>{repo.name}</a></h4>
        </div>

    )
}
RepoItem.prototype = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
