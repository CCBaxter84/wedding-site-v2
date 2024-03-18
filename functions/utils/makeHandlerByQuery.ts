import { getContentByQuery } from './getContentByQuery'
import { formatResponse } from './formatResponse'

export const makeHandlerByQuery = (query) => async () => {
  try {
    const data = await getContentByQuery(query)
    return formatResponse(200, data)
  } catch(error) {
    console.error(error)
    return formatResponse(500, { error })
  }
}