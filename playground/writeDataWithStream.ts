const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" }
];

// CSV形式の文字列を生成する関数
function createCSVLine(item: any): string {
  return `"${item.name}",${item.age},"${item.email}"\n`;
}

// ストリームを使ってファイルにデータを書き込む関数
async function writeDataWithStream(filename: string, data: any[]) {
  // ファイルを書き込みモードで開く
  const file = await Deno.open(filename, { write: true, create: true, truncate: true });

  try {
    // ヘッダーを書き込む
    await file.write(new TextEncoder().encode("Name,Age,Email\n"));
    // 各データ項目をCSV形式で書き込む
    for (const item of data) {
      const line = createCSVLine(item);
      await file.write(new TextEncoder().encode(line));
    }
    console.log("CSVデータがファイルに書き込まれました。");
  } catch (error) {
    console.error("ファイル書き込みエラー:", error);
  } finally {
    // ファイルをクローズ
    file.close();
  }
}

// データをファイルに書き込む
writeDataWithStream("output.csv", data);