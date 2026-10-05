async function postJson(url: string, body: Record<string, string>) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(data?.error || 'Request failed. Please try again.')
  }
}

export function submitContact(body: { name: string; email: string; message: string }) {
  return postJson('/api/contact', body)
}

export function submitMembership(body: {
  name: string
  email: string
  affiliation: string
  category: string
}) {
  return postJson('/api/membership', body)
}
