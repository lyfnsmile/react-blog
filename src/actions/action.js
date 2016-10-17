import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const BASIC_URL = 'https://api.github.com'


//获取user信息
function requestPosts(user) {
    return {
        type: REQUEST_POSTS,
        user
    }
}

//获取新闻成功的action
function receivePosts(user, json) {
    return {
        type: RECEIVE_POSTS,
        user,
        data: json,
        receivedAt: Date.now()
    }
}

//获取用户信息成功的action
function receiveUser(user, json) {
    return {
        type: RECEIVE_USER,
        user,
        data: json,
        receivedAt: Date.now()
    }
}

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
export function fetchPosts(user) {
    return dispatch => {
        dispatch(requestPosts(user))
        return fetch(`${BASIC_URL}/users/${user}/events`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(user, json)))
    }
}

//获取文章，先触发requestPosts开始获取action，完成后触发receiveUser获取成功的action
export function fetchUser(user) {
    return dispatch => {
        dispatch(requestPosts(user))
        return fetch(`http://localhost:3000/getInfo/${user}`, {
                mode: 'no-cors'
            }).then(response => response.json())
            .then(json => dispatch(receiveUser(user, json)))
    }
}


//如果需要则开始获取文章
export function fetchPostsIfNeeded(user) {
    return (dispatch, getState) => {
        // if (shouldFetchPosts(getState(), reddit)) {
        return dispatch(fetchPosts(user))
            // }
    }
}