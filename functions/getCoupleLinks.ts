import { Handler } from '@netlify/functions'
import { makeHandlerByQuery } from './utils/makeHandlerByQuery'
import { makeQuery } from './utils/makeQuery'

const query = makeQuery('Couple')
const handler: Handler = makeHandlerByQuery(query)

export { handler }