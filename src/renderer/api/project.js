import request from '@/utils/request'
/*eslint-disable*/
export function projectList(listQuery) {
    return request({
        url: '/projects',
        method: 'get',
        params: {
            size: listQuery.size,
            page: listQuery.page
        }
    })
}

export function createProject(data) {
    return request({
        url: '/projects',
        method: 'post',
        data
    })
}

export function updateProject(data, id) {
    return request({
        url: '/projects/' + id,
        method: 'patch',
        data
    })
}

export function deleteProject(id) {
    return request({
        url: '/projects/' + id,
        method: 'delete'
    })
}

