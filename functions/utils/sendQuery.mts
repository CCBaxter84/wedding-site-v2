import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export default async (query, variables = '') => {
  const { data: { data, errors} } = await axios({
    url: process.env.FAUNA_URL,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
    },
    data: {
      query,
      variables
    }
  })
  if (errors) {
    console.error(errors);
    throw new Error('Something went wrong')
  }
  return data
}