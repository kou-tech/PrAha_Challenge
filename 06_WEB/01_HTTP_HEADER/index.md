# 課題1-1
Host リクエストヘッダーは、リクエストが送信される先のサーバーのホスト名とポート番号を指定する。
- [Host](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Host)

Content-Type リクエストヘッダーは、リクエストボディのメディアタイプを指定する。これは通常、MIME タイプと呼ばれる。(例: text/html, application/json)
- [Content-Type](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Content-Type)
- [MIME type](https://developer.mozilla.org/ja/docs/Glossary/MIME_type)

User-Agent リクエストヘッダーは、リクエストを送信しているユーザーエージェントのアプリケーションタイプ、オペレーティングシステム、ソフトウェアベンダー、ソフトウェアバージョン、およびソフトウェアのユーザーエージェントタイプを提供する。
- [User-Agent](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/User-Agent)
- [ユーザーエージェント文字列を用いたブラウザーの判定](https://developer.mozilla.org/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent)

Accept リクエストヘッダーは、クライアントが受け入れ可能なコンテンツタイプを指定する。
- [Accept](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Accept)

Referer リクエストヘッダーは、リクエストを発行する前のページの URL を指定する。ウェブサイトのトラフィックがどこから来ているかを追跡するために使用される。
- [Referer](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Referer)

Accept-Encoding リクエストヘッダーは、クライアントが受け入れ可能なコンテンツエンコーディングを指定する。(例: gzip, deflate)
- [Accept-Encoding](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Accept-Encoding)

AuthorizationAuthorization リクエストヘッダーは、リクエストされたリソースへのアクセスを許可するための認証情報を含む。
- [Authorization](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Authorization)

Location レスポンスヘッダーは、リダイレクト先の URL を指定する。通常、3xx ステータスコードとともに使用される。
- [Location](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Location)

## 課題1-2

`target="_blank"`を設定した場合、新しいタブでリンクを開く際に、新しいページは元のページと同じプロセスを共有する。
これにより、新しいページが元のページに対してJavaScriptのwindow.opener APIを利用して影響を及ぼす可能性がある。
これは、パフォーマンスやセキュリティに影響を及ぼす可能性がある。

- [noopener](https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/rel/noopener)
- [noreferrer](https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/rel/noreferrer)
- [Referer問題](https://developer.mozilla.org/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)

## 課題1-3

`rel="noreferrer"`を設定しないと、新しく開いたページから元のページに対してJavaScriptを介して操作が可能となる。これは、新しいタブで開かれたサイトが悪意のあるサイトであった場合、元のサイトを操作される可能性があるというセキュリティリスクを生じさせる。

### 補足
Tabnabbing攻撃は、新しいタブを開く操作を悪用したフィッシング攻撃の一種である。ユーザがリンクをクリックして新しいタブを開いたとき、元のウェブページが悪意あるページに変わる可能性がある。これにより、ユーザが元のタブに戻ったときに、見た目が正規のウェブサイトに酷似したフィッシングサイトに誘導され、個人情報をだまし取られる可能性がある。

## 課題1-4
要求を満たすためには、「Referrer-Policy」ヘッダーに「origin-when-cross-origin」を設定する。
この値を設定すると、同じオリジンの場合はフルURLがRefererとして送信され、異なるオリジンの場合はオリジン情報のみがRefererとして送信される。

例:

同じオリジンの場合
```
Referer: https://example.com/page.html
```

異なるオリジンの場合
```
Referer: https://example.com/
```

- [Referrer-Policy](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Referrer-Policy)
- [origin-when-cross-origin](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Referrer-Policy#origin-when-cross-origin)

## 課題3-1

- フォロー関係は履歴や記録を残す必要がないため、DELETEを使う。
- 取引の記録は残す必要があるため、PATCHを使う。
- お気に入りのリストは残す必要がないため、DELETEを使う。
  - 補足 : 過去のお気に入り傾向からサジェストするなどがあっても、それは分析用のためなのでAPIの振る舞いとしてはDELETEを使う。

## 課題3-2
HTTPメソッドの使用は、ユースケースや要件によって異なるが、個人的にはなるべくRESTfulな設計に従ってHTTPメソッドを使用することが重要だと考える。
複数人で開発を行う場合、RESTfulな設計に従ってHTTPメソッドを使用することで、APIの設計が一貫性を持ち、開発効率が向上すると思うからである。

ただし、個人の解釈が入る部分もあるため、チームでのルールを決めておくことが重要である。

例:
- PutとPatchの使い分け
- CRUD以外の操作をどのように表現するか

