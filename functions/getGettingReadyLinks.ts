import { Handler } from '@netlify/functions'
import { makeHandlerByQuery, makeQuery } from './utils'

const query = makeQuery('GettingReady')
const handler: Handler = makeHandlerByQuery(query)

export { handler }