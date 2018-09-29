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

export function createUser(data) {
    return request({
        url: '/users',
        method: 'post',
        data
    })
}

export function updateUser(data, id) {
    return request({
        url: '/users/' + id,
        method: 'patch',
        data
    })
}

export function deleteUser(id) {
    return request({
        url: '/users/' + id,
        method: 'delete'
    })
}

