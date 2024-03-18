export function makeQuery(name) {
  return `Link.where(.album == "${name}").paginate(1000)`
}