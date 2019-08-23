export const GET_USER_INFO_REQUEST = 'get_user_info_request'
export const GET_USER_INFO_SUCCESS = 'get_user_info_success'
export const GET_USER_INFO_FAIL = 'get_user_info_fail'

function getUserInfoRequest() {
  return { type: GET_USER_INFO_REQUEST }
}

function getUserInfoSuccess(userInfo) {
  return { type: GET_USER_INFO_SUCCESS, userInfo }
}

function getUserInfoFail() {
  return { type: GET_USER_INFO_FAIL }
}

export function getUserInfo() {
  return function(dispatch) {
    dispatch(getUserInfoRequest())
    return new Promise((resolve, reject) => {
      resolve({
        name: 'conrad',
        intro: 'kebk react app'
      })
    })
      .then(res => dispatch(getUserInfoSuccess(res)))
      .catch(err => dispatch(getUserInfoFail()))
  }
}
