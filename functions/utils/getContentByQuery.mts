import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export default async (query) => {
  const { data: { data, errors} } = await axios({
    url: process.env.FAUNA_URL,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    data: {
      query
    }
  })
  if (errors) {
    console.error(errors);
    throw new Error('Something went wrong')
  }
  return data.data
}