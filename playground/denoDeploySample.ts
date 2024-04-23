/**
 * export DENO_DEPLOY_TOKEN ddp_QKQwC7siVEstCFlbNcwQZtU0JA2nz80sqZ4V
 * deployctl deploy --project=hello-world-suzuki denoDeploySample.ts
 */

function handler(_req: Request): Response {
  return new Response("Hello, World!", {
    headers: { "content-type": "text/plain" },
  });
}

Deno.serve(handler);