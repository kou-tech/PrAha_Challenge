## 課題1

```bash
curl -X GET -H "X-Test: hello" https://httpbin.org/headers
```

### メモ
- `-X` オプションでHTTPメソッドを指定する
- `-H` オプションでヘッダーを指定する

## 課題2

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "hoge"}' https://httpbin.org/post
```

### メモ
- `Content-Type` ヘッダーはリクエストボディの形式を指定する
- `-d` オプションでリクエストボディを指定する

## 課題3

```bash
curl -X POST -H "Content-Type: application/json" -d '{"userA": {"name": "hoge", "age": 29}}' https://httpbin.org/post
```

## 課題4

```bash
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'name=hoge' https://httpbin.org/post
```

## 課題5
Q1. curlコマンドを利用して、HTTP Requestのレスポンスボディを取得してください。

A1.

```bash
curl -w "%{time_total}\n" -o /dev/null -s <URL>
```

Q2. curlコマンドを利用して、HTTP Requestのレスポンスボディをファイルに保存してください。

A2.

```bash
curl -o <ファイル名> <URL>
```

```bash
curl <URL> > output.txt
```

Q3. curlコマンドを利用して、HTTP Requestのレスポンスボディを取得し、エラーメッセージをファイルに保存してください。

A3.

```bash
curl -sS -o output.txt -f <URL> 2> error.txt
```

※ `-f`オプションは、エラーが発生した場合にエラーを出力するオプション
※ `-sS` オプションは、進捗状況は表示しないが、エラーメッセージは表示するオプション
