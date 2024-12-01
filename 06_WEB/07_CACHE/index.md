## 課題1-1
- キャッシュにより、ウェブページやアプリケーションの応答時間が短縮され、ユーザーの待ち時間が減少する。これは特にモバイルデバイスや低速なネットワーク環境で重要となる。
- キャッシュを活用することで、サーバーへのリクエスト数を減らし、サーバーリソースを効率的に使用できる。これにより、サーバーのスケーラビリティが向上し、多数のユーザーを同時に処理できるようになる。
- ネットワークトラフィックやサーバー処理の削減は、インフラストラクチャーのコスト削減につながる。特に大規模なウェブサービスでは、この効果が顕著になる。

## 課題1-2
- キャッシュが受信するリクエスト数とキャッシュが正常に実行できるコンテンツリクエスト数を比較して測定して算出した値のことである。
  - 適切なキャッシュ有効期限の設定
  - 頻繁にアクセスされるコンテンツを事前にキャッシュする
  - キャッシュキーの最適化
    - URLパラメータやクッキーなどの不要な情報をキャッシュキーから除外し、同じコンテンツに対する異なるキャッシュエントリの重複を減らす。

## 課題1-3
- DBのバッファプール
  - DBのバッファプールは、データベース管理システム（DBMS）が使用するメモリ内のキャッシュである。頻繁にアクセスされるデータページをRAMに保持することで、ディスクI/Oを減らし、クエリの実行速度を向上させる。バッファプールは、最近使用されたデータや頻繁にアクセスされるデータを優先的に保持し、必要に応じて古いデータを破棄する。これにより、データベースの全体的なパフォーマンスが向上し、応答時間が短縮される。
- 分散キャッシュ
  - 分散キャッシュは、複数のサーバーやノード間でデータを分散して保存するキャッシュシステムである。これにより、単一のサーバーの負荷を軽減し、高可用性と高速なデータアクセスを実現する。代表的な例として`Memcached`や`Redis`があり、大規模なウェブアプリケーションやマイクロサービスアーキテクチャで広く使用されている。
- プロキシキャッシュ
  - プロキシキャッシュは、クライアントとサーバーの間に位置する中間サーバーで動作するキャッシュシステムである。主にネットワークトラフィックの削減と応答時間の短縮を目的としている。CDN（Content Delivery Network）で広く使用され、同じリソースに対する複数のリクエストを効率的に処理する。

## 課題1-4
- `Cache-Control`
  - このヘッダーは、リソースのキャッシュ動作を指定する最も強力で柔軟なヘッダーである。`no-store`、`no-cache`、`max-age`などの指示を含むことができ、キャッシュの有効期限や再検証の要件を細かく制御できる。
- `ETag`
  - このヘッダーは、リソースの特定バージョンを一意に識別するための値を提供する。ブラウザはこの値を保存し、後続のリクエストで If-None-Match ヘッダーと共に使用することで、リソースが変更されたかどうかを効率的に確認できる。
- `Expires`
  - このヘッダーは、リソースが期限切れになる具体的な日時を指定する。ただし、Cache-Control ヘッダーの max-age ディレクティブがある場合、そちらが優先される。

- [Clear-Site-Data](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Clear-Site-Data)

## 課題1-5
最も古いキャッシュデータから順に削除される。
[ドキュメント](https://developer.mozilla.org/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)

## 課題1-6
動的なサイトでは、ユーザーごとに表示される内容が異なり、頻繁に更新される可能性があるため、Expiresヘッダーを使用すると問題が生じる可能性がある。具体的には、キャッシュされた古い情報がユーザーに表示され続け、最新の情報が反映されないリスクがある。また、Expiresヘッダーは絶対時間を指定するため、クライアントとサーバーの時計の同期が必要となり、管理が複雑になる可能性がある。

## 課題1-7
Cache-Controlヘッダーの方が柔軟性が高く、より細かい制御が可能である。

## 課題1-8
動的なサイトでは、Cache-Controlヘッダーを使用して適切なキャッシュ制御を行うことが推奨される。

1. Cache-Control: `no-store` を使用して、キャッシュを完全に無効化する。これにより、常に最新のコンテンツがサーバーから取得される。
2. Cache-Control: `no-cache` を使用して、キャッシュの使用前に必ずサーバーに再検証を要求させる。これにより、コンテンツの更新を確認しつつ、変更がない場合はキャッシュを使用できる。
3. Cache-Control: `max-age=短い秒数` を設定して、短時間のキャッシュを許可する。これにより、頻繁なサーバーへのアクセスを減らしつつ、比較的新しい情報を提供できる。
