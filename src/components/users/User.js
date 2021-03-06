import React, { Fragment, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {

    const githubContext = useContext(GithubContext)
    const { user, loading, getUser, getUserRepos, repos, } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user

    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light' >Back To Search</Link>

            Hireable: {' '}
            {hireable ? (
                <i className='fas fa-check text-success' />
            ) : (
                <i className='fas fa-times-circle text-danger' />
            )}

            <div className='card grid-2' >
                <div className='all-center' >
                    <img src={avatar_url} alt='avatar' className='round-img' style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-primary my-1' >Vist Github Profile</a>
                    <ul>
                        <li>
                            {login &&
                                <Fragment>
                                    <strong>Username: </strong>{login}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {company &&
                                <Fragment>
                                    <strong>Company: </strong>{company}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {blog &&
                                <Fragment>
                                    <strong>Blog: </strong>{blog}
                                </Fragment>
                            }
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-success">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-success">Public Respos: {public_repos}</div>
                <div className="badge badge-success">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />

        </Fragment>
    )

}

// User.propTypes = {
// loading: PropTypes.bool,
// user: PropTypes.object.isRequired,
// repos: PropTypes.array.isRequired,
// getUser: PropTypes.func.isRequired,
//     getUserRepos: PropTypes.func.isRequired,
// }

export default User
