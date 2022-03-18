export async function handleRequest(request: Request): Promise<Response> {
  if (request.url.endsWith('/send')) {
    const { message } = await request.json()

    console.log(message)
  }
  return new Response()
}
