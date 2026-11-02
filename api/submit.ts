import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { firstName, lastName, email, phone, challenge } = req.body

  const payload = new URLSearchParams({
    'location_id': 'rtz5d7uYQCoZTssQS1cF',
    'formId': 'ow57hZFfRizVdIKUUQfZ',
    'first_name': firstName ?? '',
    'last_name': lastName ?? '',
    'email': email ?? '',
    'phone': phone ?? '',
    'message': challenge ?? '',
  })

  const ghlRes = await fetch('https://backend.leadconnectorhq.com/forms/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Origin': 'https://api.leadconnectorhq.com',
      'Referer': 'https://api.leadconnectorhq.com/widget/form/ow57hZFfRizVdIKUUQfZ',
    },
    body: payload.toString(),
  })

  const text = await ghlRes.text()
  res.status(ghlRes.ok ? 200 : 502).send(text)
}
