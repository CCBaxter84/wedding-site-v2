import { Handler } from '@netlify/functions'
import { makeHandlerByQuery, PAGINATION } from './utils'

const query = "Link.all()" +
  ".where(.description.includes('Nova') ||" +
    ".description.includes('Revan') ||" +
    ".description.includes('Puppies'))" +
  `.paginate(${PAGINATION})`
const handler: Handler = makeHandlerByQuery(query)

export { handler }