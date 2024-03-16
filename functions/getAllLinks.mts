import type { Context } from "@netlify/functions"
import axios from 'axios'
import sendQuery from './utils/sendQuery.mts'
import formatResponse from './utils/formatResponse.mts'
import ERROR_MESSAGE from './utils/getLinksRequests.mts'

export default async (req: Request, context:Context) => {
  const config = {
    url: process.env.FAUNA_URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      query: "Collection.all()"
    }
  }
  const res = await axios(config)
  // const GET_ALL_LINKS = `query {
  //   getAllLinks(_size: 700) {
  //     data {
  //       description,
  //       url
  //     }
  //   }
  // }`
  console.log(res.data.data)
  // const data = await sendQuery(GET_ALL_LINKS)
  return new Response(res.data.data)
  // return new Response(data.getAllLinks.data)

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