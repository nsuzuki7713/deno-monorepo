import { $ } from "https://deno.land/x/dax@0.39.2/mod.ts";

async function main() {
  // 現在のディレクトリのファイルリストを取得し、標準出力をパイプ処理する
  const result = await $`ls -al`.stdout("piped");
  const output = new TextDecoder().decode(result.stdoutBytes);

  console.log(output);

  // 特定のファイルが存在するかチェック
  const fileName = "README.md";
  if (output.includes(fileName)) {
    console.log(`${fileName} exists!`);
  } else {
    console.log(`${fileName} does not exist.`);
  }
}

main();