import xhttp from './index'
export const getUserInfo = ({ userId }) => {
  return xhttp.request({
    url: '/users/getUserInfo',
    method: 'get',
    data: {
      userId
    }
  })
}
