import { PAGINATION } from './const'

export function makeQuery(name) {
  return `Link.where(.album == "${name}")` +
    `.paginate(${PAGINATION})`
}