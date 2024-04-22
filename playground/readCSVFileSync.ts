// CSVデータを解析する関数
function parseCSV(data: string): any[] {
  const rows = data.split('\n');
  // 最初の行をヘッダーとして取得
  const headers = rows.shift()?.split(',') || [];

  // CSVの各行をオブジェクトに変換
  return rows.map(row => {
    const values = row.split(',');
    const entry = headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {} as any);
    return entry;
  });
}

// ファイルを読み込んで解析する関数
async function readCSVFile(filename: string): Promise<any[]> {
  try {
    // ファイルからテキストを読み込み
    const text = await Deno.readTextFile(filename);
    // CSVを解析して返す
    return parseCSV(text);
  } catch (error) {
    console.error('ファイルの読み込み中にエラーが発生しました:', error);
    return [];
  }
}

// CSVファイルを読み込み
readCSVFile("output.csv").then(data => {
  console.log('読み込んだデータ:', data);
});
