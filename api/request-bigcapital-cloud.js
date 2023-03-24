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

export const createCloudDemoRequest = ({
  fullName,
  businessName,
  businessEmail,
}) => {
  return client.create({
    _type: "cloud_demo_requests",
    fullName,
    businessName,
    businessEmail,
  })
}

export default async function handler(req, res) {
  const {
    body: { fullName, businessEmail, businessName },
  } = req

  if (!fullName || !businessEmail || !businessName) {
    return res.status(400).send({
      code: "invalid_schema",
    })
  }
  await createCloudDemoRequest({
    fullName,
    businessEmail,
    businessName,
  })
  return res.status(200).send({ status: 200 })
}
