import request from '@/utils/request'
/*eslint-disable*/
export function UserList(listQuery) {
    return request({
        url: '/users',
        method: 'get',
        params: {
            size: listQuery.size,
            page: listQuery.page
        }
    })
}