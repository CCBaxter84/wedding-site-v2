import { Handler } from '@netlify/functions'
import { makeHandlerByQuery } from './utils'

const query = 'Link.where(.album == "Ceremony").paginate(1000)'
const handler: Handler = makeHandlerByQuery(query)

export { handler }