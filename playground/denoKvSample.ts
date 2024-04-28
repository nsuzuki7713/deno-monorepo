// deno run -A --unstable-kv denoKvSample.ts

// 接続
const kv = await Deno.openKv();

// 書き込みデータ
const book1 = {
  title: "hoge",
  desc: "very hoge."
}

// 書き込み
await kv.set(["books", book1.title], book1);

// 読み取り
const result = await kv.get(["books", book1.title]);

// 結果出力
console.log(result.value)