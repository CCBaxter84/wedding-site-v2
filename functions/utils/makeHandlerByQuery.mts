import getContentByQuery from './getContentByQuery.mts'
import formatResponse from './formatResponse.mts'

export const makeHandlerByQuery = (query) => async () => {
  try {
    const data = await getContentByQuery(query)
    return formatResponse(200, data)
  } catch(error) {
    console.error(error)
    return formatResponse(500, { error })
  }
}