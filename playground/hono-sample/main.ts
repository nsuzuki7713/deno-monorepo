// deno run -A --unstable-sloppy-imports hono-sample/main.ts
import { Hono } from 'jsr:@hono/hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/welcome', (c) => {
  return c.body('Thank you for coming', 201, {
    'X-Message': 'Hello!',
    'Content-Type': 'text/plain',
  })
})


Deno.serve(app.fetch)
