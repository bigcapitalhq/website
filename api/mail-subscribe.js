import * as dotenv from "dotenv"
import { createClient } from "@sanity/client"

dotenv.config()

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: "2022-01-12",
  token: process.env.SANITY_ACCESS_TOKEN,
})

export const createEmailSubscription = email => {
  return client.create({
    _type: "mail_subscriptions",
    email,
  })
}

export default async function handler(req, res) {
  const {
    body: { email },
  } = req

  if (!email) {
    return res.status(400).send({
      code: "invalid_schema",
    })
  }
  await createEmailSubscription(email)

  return res.status(200).send({ status: 200 })
}
