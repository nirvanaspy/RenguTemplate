import request from '@/utils/request'

export function getTeam(id) {
  return request({
    url: '/teams/' + id,
    method: 'get'
  })
}

export function deleteTeam(id) {
  return request({
    url: '/teams/' + id,
    method: 'delete'
  })
}

export function updateTeam(id) {
  return request({
    url: '/teams/' + id,
    method: 'patch'
  })
}

export function addMember(id) {
  return request({
    url: '/teams/' + id + '/add-memeber',
    method: 'patch'
  })
}

export function removeMember(id) {
  return request({
    url: '/teams/' + id + '/remove-memeber',
    method: 'patch'
  })
}
