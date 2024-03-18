import { Handler } from '@netlify/functions'
import { makeHandlerByQuery, makeQuery } from './utils'

const query = makeQuery('Engagement')
const handler: Handler = makeHandlerByQuery(query)

export { handler }