const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" }
];

// CSVデータとしてフォーマットする関数
function arrayToCSV(data: any[]): string {
  const csvRows = [];
  // ヘッダー行を追加
  csvRows.push(Object.keys(data[0]).join(','));
  
  // データ行を追加
  for (const row of data) {
    csvRows.push(Object.values(row).map(v => `"${v}"`).join(','));
  }

  // 全行を改行文字で結合して返す
  return csvRows.join('\n');
}

// CSVデータを生成
const csvData = arrayToCSV(data);

// ファイルに書き込み
async function writeCSVFile(filename: string, data: string): Promise<void> {
  try {
    await Deno.writeTextFile(filename, data);
    console.log('CSVファイルが正常に書き込まれました。');
  } catch (error) {
    console.error('ファイルの書き込み中にエラーが発生しました:', error);
  }
}

// ファイルへの書き込みを実行
writeCSVFile("output.csv", csvData);