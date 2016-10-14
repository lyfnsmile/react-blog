import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const BASIC_URL = 'https://api.github.com/'


//获取user信息
function requestPosts(user) {
  return {
    type: REQUEST_POSTS,
    user
  }
}

//获取新闻成功的action
function receivePosts(user,json) {
  return {
    type: RECEIVE_POSTS,
    user,
    receivedAt: Date.now()
  }
}

//获取文章，先触发requestPosts开始获取action，完成后触发receivePosts获取成功的action
function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts(user))
    return fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(user, json)))
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
