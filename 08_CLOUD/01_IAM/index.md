## 課題１

A.

- IAMユーザ
  - AWSリソースにアクセスするための個別の認証情報を持つエンティティ。特定の個人、アプリケーション、またはサービスに関連付けられる。
- IAMグループ
  - 複数のIAMユーザーをまとめて管理するための集合体。グループ単位でポリシーを適用することで、効率的な権限管理が可能になる。
- IAMポリシー
  - AWSリソースへのアクセス権限を定義するJSONドキュメント。ユーザー、グループ、ロールに付与され、許可または拒否の詳細を指定する。
- IAMロール
  - 特定のAWSリソースに対して一時的な認証情報を提供するIAMエンティティ。主にEC2インスタンスやLambda関数などのAWSサービスに関連付けて使用される。
- Permission boundary（アクセス許可境界）
  - IAMエンティティ（ユーザーまたはロール）に付与できる最大権限を定義するポリシー。主に権限の範囲を制限するために使用される。
- AWS管理ポリシー、カスタマー管理ポリシー
  - AWS管理ポリシーはAWSが作成・管理する汎用的なポリシーで、カスタマー管理ポリシーはユーザーが作成・管理する特定のニーズに合わせたポリシーである。
- ホワイトリストパターン、ブラックリストパターン
  - ホワイトリストパターンは明示的に許可されたアクションのみを実行可能にし、ブラックリストパターンは明示的に禁止されたアクション以外を許可する方式である。セキュリティの観点からは通常、ホワイトリストパターンが推奨される。

## 課題２
A.

- セキュリティリスクを軽減するため。ルートユーザは全ての権限を持つため、不正アクセスされた場合のリスクが非常に高い。
- アクセスを制御するため。IAMユーザーは必要最小限の権限のみを付与でき、アクセス管理が容易。
- IAMユーザーの操作は追跡可能で、セキュリティ監査に有用できるため。
- AWSは日常的な作業にIAMユーザーの使用を推奨しているため。

A.

- IAMユーザーを共有すると、個々のユーザーの操作を特定できなくなり、セキュリティ監査や問題発生時の原因特定が困難になる。
- 複数の人間でアカウントを共有することで、認証情報が広く知られることになり、情報漏洩のリスクが高まる。
- 個々のユーザーに応じた細かい権限設定ができなくなり、必要以上の権限を与えてしまう可能性がある。
- 共有アカウントのパスワード変更や管理が複雑になり、セキュリティリスクが高まる。
- 問題が発生した際に、誰が責任を負うべきかが不明確になる。

A.

- AdministratorAccessは、AWSアカウント内のすべてのリソースに対するフルアクセス権限を持つ。IAMを含むすべてのサービスを管理できる。
- PowerUserAccessは、IAMとOrganizationsを除くほとんどのAWSサービスへのフルアクセス権限を持つ。ユーザー、グループ、ロールの管理はできない。
- 主な違いは、PowerUserAccessではIAMの管理ができないため、新しいユーザーの作成や既存のユーザーの権限変更などができない。これにより、権限の昇格を防ぎ、セキュリティを向上させている。

A.

- AWS管理ポリシー
  - 一般的なユースケースに適しており、AWSによって管理・更新される
  - 新しいサービスや機能に対応して自動的に更新される
  - セットアップが簡単で、すぐに使用可能
- カスタマー管理ポリシー
  - 組織固有のニーズに合わせてカスタマイズ可能
  - より細かい権限制御が必要な場合に適している
  - 特定のリソースやアクションに対する制限を詳細に設定できる
- 使い分け
  - 一般的な権限設定にはAWS管理ポリシーを使用し、特殊なケースや詳細な制御が必要な場合にカスタマー管理ポリシーを作成する
  - AWS管理ポリシーを基にしてカスタマー管理ポリシーを作成し、必要に応じて調整することも効果的

## 課題3
A.

- グループにポリシーを付与し、ユーザをそのグループに所属させる方法が一般的に適切である。
  - 多数のユーザに同じ権限を付与する場合、グループを使用すると一度の操作で済むため、管理が容易になる。
  - グループを使用することで、同じ役割や職責を持つユーザに一貫した権限を付与できる。
  - 権限の変更が必要な場合、グループのポリシーを変更するだけで、所属する全ユーザの権限が更新される。
  - 個別にユーザに権限を付与する場合、人為的ミスによる過剰な権限付与のリスクが高まる。グループを使用することでこのリスクを軽減できる。

A.

- EC2インスタンスにロールを付与する方が適切である。
  - ロールを使用することで、EC2インスタンスに直接認証情報を保存する必要がなくなり、セキュリティリスクが低減される。
  - ロールは動的に変更可能で、必要に応じて権限を追加・削除できる。
  - 複数のEC2インスタンスに同じ権限を付与する場合、ロールを使用すると管理が容易になる。
  - AWSはEC2インスタンスへの権限付与にはIAMロールの使用を推奨している。

A.

Identity based ポリシー
- ユーザー、グループ、またはロールにアタッチされるポリシーである。
- 特定のIAMエンティティ（ユーザー、グループ、ロール）に対してアクセス許可を付与する。
- 特定のユーザーがS3バケットにアクセスできるようにする場合など。

Resource based ポリシー
- リソース自体にアタッチされるポリシーである。例えば、S3バケットやSQSキューなど。
- リソースに対するアクセス許可を定義し、他のAWSアカウントやIAMエンティティに対してアクセスを許可する。
- 他のAWSアカウントのユーザーが自分のS3バケットにアクセスできるようにする場合など。

使い分け

Identity based ポリシーを使う時
- 特定のIAMユーザーやロールに対してアクセス許可を設定したい場合。
- 組織内のユーザーやサービスに対してアクセス管理を行う場合。

Resource based ポリシーを使う時
- クロスアカウントアクセスを設定したい場合。
- 特定のリソースに対して、他のAWSアカウントやIAMエンティティからのアクセスを許可したい場合。

A.

- バケットポリシー
  - S3バケット自体にアクセス制御ポリシーを設定し、より細かな制御を行う。
- パブリックアクセスブロック設定
  - バケットレベルまたはアカウントレベルで、意図しないパブリックアクセスを防ぐ。
- 暗号
  - サーバーサイド暗号化（SSE）を有効にし、保存データを保護する。
- バージョニング
  - 意図しない変更や削除から保護するために、バージョニングを有効にする。
- アクセスログ
  - バケットへのアクセスを監視し、不正なアクティビティを検出するためにアクセスログを有効にする。
- CORS（Cross-Origin Resource Sharing）設定
  - 必要な場合のみ、適切に設定して不正なクロスオリジンアクセスを防ぐ。
- VPC エンドポイント
  - 必要に応じて、VPC内からのみS3にアクセスできるようにVPCエンドポイントを設定する。