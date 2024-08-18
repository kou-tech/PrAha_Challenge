const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

// 画像ファイルのパス
const imagePath = path.join(__dirname, "public/image.png");

// キャッシュを使用するエンドポイント
app.get("/cached-image", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=3600"); // 1時間キャッシュ
  res.sendFile(imagePath);
});

// キャッシュを使用しないエンドポイント
app.get("/uncached-image", (req, res) => {
  res.setHeader("Cache-Control", "no-store, must-revalidate");
  res.sendFile(imagePath);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
