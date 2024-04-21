import * as line from "npm:@line/bot-sdk"
import { config } from "https://deno.land/x/dotenv/mod.ts";

// .env ファイルから環境変数を読み込む
const env = config();

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: env.CHANNEL_ACCESS_TOKEN,
})
const userId = env.USER_ID;

const message = {
  type: 'text',
  text: 'Hello push message',
} as const;

await client.pushMessage({
  to: userId,
  messages: [message],
});