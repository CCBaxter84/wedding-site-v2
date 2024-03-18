import { Handler } from '@netlify/functions'
import { makeHandlerByQuery, makeQuery } from './utils'

const query = makeQuery('Couple')
const handler: Handler = makeHandlerByQuery(query)

export { handler }