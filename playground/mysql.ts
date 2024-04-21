import { Client } from "https://deno.land/x/mysql/mod.ts";

async function main() {
  // MySQLクライアントのインスタンスを作成します。
  const client = new Client();

  // データベースに接続します。
  await client.connect({
    hostname: "localhost",  // データベースのホスト名
    port: 4000,  // ポート番号
    username: "tidb",  // ユーザー名
    password: "docker",  // パスワード
    db: "mcweb_dev",  // データベース名
  });

  // SQLクエリを実行し、結果を取得します。
  const result = await client.query("SELECT * FROM customer");

  // 結果をコンソールに出力します。
  console.log(result);

  // データベース接続を閉じます。
  await client.close();
}

main().catch(console.error);
