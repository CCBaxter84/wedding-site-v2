import { Handler } from '@netlify/functions'
import getContentByQuery from './utils/getContentByQuery.mts'
import formatResponse from './utils/formatResponse.mts'

const handler: Handler = async () => {
  try {
    const query = "Link.all().paginate(1000)"
    const data = await getContentByQuery(query)
    console.log(data.length)
    return formatResponse(200, data)
  } catch(error) {
    console.error(error)
    return formatResponse(500, 
      { error })
  }
}

export { handler }