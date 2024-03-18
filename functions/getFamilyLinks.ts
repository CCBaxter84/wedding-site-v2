import { Handler } from '@netlify/functions'
import { makeHandlerByQuery, makeQuery } from './utils'

const query = makeQuery('Family')
const handler: Handler = makeHandlerByQuery(query)

export { handler }