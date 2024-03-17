import { Handler } from '@netlify/functions'
import { makeHandlerByQuery } from './utils/makeHandlerByQuery.mts'

const query = "Link.all().paginate(1000)"
const handler: Handler = makeHandlerByQuery(query)

export { handler }