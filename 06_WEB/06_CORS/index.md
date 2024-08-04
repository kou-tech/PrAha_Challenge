## 課題1-1
CORS (Cross-Origin Resource Sharing)は、クライアントとサーバー間で安全に通信するための仕組みである。
クライアントがサーバーに対して「simple request」を行う場合、preflight requestは不要である。

特定の条件を満たしたリクエスト（例えば、標準的なHTTPメソッドや標準的なHTTPヘッダーのみを使用するリクエスト）が「simple request」として扱われる。

一方、条件を満たさないリクエストについては、クライアントはサーバーに対して「preflight request」を送信し、送信元の検証を行う。

この検証プロセスでは、サーバーへのリクエストヘッダーに「access-control-allow-origin」が含まれる。

サーバー側はそのリクエストのヘッダーに「access-control-allow-origin」があるか確認し、その値が通信可能なアクセス元かどうかを検証する。

これらの手続きを経て、CORSはサーバーとアクセス元が信頼できる関係であることを確認する。

### 参考資料
- https://developer.mozilla.org/ja/docs/Web/HTTP/CORS

## 課題1-2
信頼するアクセス元のオリジンの指定がワイルドカードになっているので、全てのオリジンを許可していることを意味する。

これにより、信頼できないアクセス元からの通信も可能になり、悪意のある攻撃やデータ漏洩のリスクが増大する可能性がある。

## 課題1-3
以下のすべての条件を満たすものである。

- 許可されているHTTPメソッドの1つを使用すること
- リクエストヘッダーが `Accept`、`Accept-Language`、`Content-Language`、または `Content-Type` のみであること
- `Content-Type` が `application/x-www-form-urlencoded`、`multipart/form-data`、または `text/plain` のいずれかであること
- リクエストが`XMLHttpRequest`オブジェクトを使用して行われる場合、リクエストに使用される`XMLHttpRequest.upload`プロパティによって返されるオブジェクトにイベントリスナーが登録されていないこと
- リクエストに `ReadableStream` オブジェクトが使用されていないこと
    - データのストリームを読み取るために使用される

## 課題1-4

## 課題1-5
aタグを使用したリンク遷移は、リソースの取得ではなくブラウザによる`webNavigation` APIを使用して遷移するため、CORSの制約を受けない。

## 課題1-6
`XMLHttpRequest`または`Fetch API`を使用する際に、`withCredentials`オプションをtrueに設定する必要がある。これにより、リクエストにクッキーが含まれる。

## 課題2

