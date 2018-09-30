import request from '@/utils/request'

export function getTeam(id) {
  return request({
    url: '/teams/' + id,
    method: 'get'
  })
}

export function getTeamMembers(id) {
  return request({
    url: '/teams/' + id + '/members',
    method: 'get'
  })
}

export function getTeamByOwner(id) {
  return request({
    url: '/users/' + id + '/own-team',
    method: 'get'
  })
}

export function getTeamByMember(id) {
  return request({
    url: '/users/' + id + '/in-team',
    method: 'get'
  })
}
export function saveTeam(id, data) {
  return request({
    url: '/users/' + id + '/team',
    method: 'post',
    data
  })
}
export function deleteTeam(id) {
  return request({
    url: '/teams/' + id,
    method: 'delete'
  })
}

export function updateTeam(id, data) {
  return request({
    url: '/teams/' + id,
    method: 'patch',
    data
  })
}

export function addMembers(id, ids) {
  return request({
    url: '/teams/' + id + '/add-members',
    method: 'patch',
    ids
  })
}

export function removeMembers(id) {
  return request({
    url: '/teams/' + id + '/remove-memebers',
    method: 'delete'
  })
}
