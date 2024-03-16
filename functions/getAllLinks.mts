import type { Context } from "@netlify/functions"
import sendQuery from './utils/sendQuery.mts'
import formatResponse from './utils/formatResponse.mts'
import ERROR_MESSAGE from './utils/getLinksRequests.mts'

export default async (req: Request, context:Context) => {
  const GET_ALL_LINKS = `query {
    getAllLinks(_size: 700) {
      data {
        description,
        url
      }
    }
  }`
  const data = await sendQuery(GET_ALL_LINKS)
  return new Response("it works")
  return new Response(data.getAllLinks.data)

  // return new Response("it works")
  // const GET_ALL_LINKS = `query {
  //   getAllLinks(_size: 700) {
  //     data {
  //       description,
  //       url
  //     }
  //   }
  // }`

  // try {
  //   const data = await sendQuery(GET_ALL_LINKS);
  //   return formatResponse(200, data.getAllLinks.data);
  // } catch(error) {
  //   console.error(error);
  //   return formatResponse(500, { error: ERROR_MESSAGE });
  // }
}