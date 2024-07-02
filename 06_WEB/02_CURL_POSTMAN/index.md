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
