import { Handler } from '@netlify/functions'
import { getLinksHandler } from './utils/getLinksHandler.mts'

const query = "Link.all().paginate(1000)"
const handler: Handler = getLinksHandler(query)

export { handler }