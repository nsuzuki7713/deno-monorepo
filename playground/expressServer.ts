import express, { Response, Request } from "npm:express@4";

const app = express();

app.get("/", (_request: Request, response: Response) =>  {
  response.send("Hello from Express!");
});

app.listen(3000);