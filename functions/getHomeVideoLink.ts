import { Handler } from '@netlify/functions'
import { makeHandlerByQuery } from './utils'

const query = "Link.all()" +
  ".where(.id == '303284513695334976')"
const handler: Handler = makeHandlerByQuery(query)

export { handler }