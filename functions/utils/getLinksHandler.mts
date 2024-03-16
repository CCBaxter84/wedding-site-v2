import sendQuery from './sendQuery.mts'
import formatResponse from './formatResponse.mts'
import ERROR_MESSAGE from './getLinksRequests.mts'

export const getLinksHandler = async (albumGetter) => {
  try {
      const res = await sendQuery(albumGetter);
      const { data } = res.getAllAlbumLinks;
      return formatResponse(200, data);
  } catch(error) {
      console.error(error);
      return formatResponse(500, { error: ERROR_MESSAGE });
  }
}