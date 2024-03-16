// import type { Context } from "@netlify/functions"
// import axios from 'axios'

// export default async (req: Request, context: Context) => {
//   const config = {
//     url: process.env.FAUNA_URL,
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     data: {
//       query: "Link.where(.album == 'Ceremony')"
//     }
//   }
//   const res = await axios(config)

//   return new Response(res.data.data)
// }

import type { Handler } from '@netlify/functions'
import axios from 'axios'

const handler: Handler = async (event, context) => {
  const config = {
    url: process.env.FAUNA_URL,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      query: "Link.where(.album == 'Ceremony')"
    }
  }
  const res = await axios(config)

  return {
    statusCode: 200,
    body: JSON.stringify(res.data.data)
  }
}

export { handler }