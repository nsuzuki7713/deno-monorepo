async function readStream(filename: string) {
  const file = await Deno.open(filename, { read: true });
  const decoder = new TextDecoder("utf-8");
  const buffer = new Uint8Array(1024); // バッファサイズを1024バイトに設定

  try {
    let fileContent = '';
    let bytesRead;
    // ファイルの終わりまで読み込む
    while ((bytesRead = await file.read(buffer)) !== null) {
      fileContent += decoder.decode(buffer.subarray(0, bytesRead), { stream: true });
      // ここで一時的に得られたデータを処理する。例えば、新しい行を検出して処理を行う。
      processContent(fileContent);
      fileContent = ''; // 処理が完了したら内容をクリア
    }
  } catch (error) {
    console.error("ファイル読み込み中にエラーが発生しました:", error);
  } finally {
    file.close(); // ファイルをクローズ
  }
}

// ファイルから得られたコンテンツを処理する関数
function processContent(content: string) {
  // ここでは単純にコンテンツをコンソールに出力する
  console.log(content);
}

// ファイルを読み込む
readStream("output.csv").then(() => {
  console.log("ファイルの読み込みが完了しました。");
});